import { Component, OnInit, ViewChild } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import {
  HISTORY_TITLE, PageHeaderService,
  STAT_PLACEHOLDER
} from '../shared/services/page-header/page-header';
import { FormControl } from "@angular/forms";
import { SearchService } from '../shared/services/search/search.service';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/operator/startWith';
import { MdExpansionPanel } from '@angular/material';
import { Team, LineChartSeries, Player, Stat, STAT_OPTIONS } from '../shared/data';
import { StatsService } from '../shared/services/stats/stats.service';

export interface ColorScheme {
  domain: string[]
}

const SMALL_WIDTH_BREAKPOINT = 840;

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss'],
  animations: [
    trigger('loaderInOut', [
      state('in', style({opacity: 1})),
      transition(':enter', [
        style({opacity: 1}),
        animate(1000)
      ]),
      transition(':leave', [
        animate(250, style({opacity: 0}))
      ])
    ])
  ]
})
export class HistoryComponent implements OnInit {

  searchCtrl: FormControl = new FormControl();
  filteredOptions: Observable<any[]>;
  players: Player[] = [];
  selectedPlayers: Player[] = [];
  teams: Team[] = [];
  selectedTeams: Team[] = [];
  lineChart: LineChartSeries[] = [];
  colorScheme: ColorScheme = { domain: [
    '#f44336', '#3f51b5', '#4caf50', '#ff9800', '#673ab7', '#009688', '#ffc107', '#607d8b', '#e91e63', '#2196f3',
    '#8bc34a', '#ff5722', '#9c27b0', '#00bcd4', '#ffeb3b', '#9e9e9e', '#03a9f4', '#cddc39', '#795548'
  ]};
  legendTitle: string = '';
  @ViewChild(MdExpansionPanel) panel : MdExpansionPanel;
  statsSubscriptions: Map<number, Subscription> = new Map();

  constructor(public searchService: SearchService, public statsService: StatsService, private pageHeaderService: PageHeaderService) {
    this.filteredOptions = this.searchCtrl.valueChanges.startWith(null).map(search => {
      if ((typeof search) === 'string') {
        return this.getOptions(search);
      }
    });
  }

  ngOnInit() {
    this.pageHeaderService.title = HISTORY_TITLE;
    this.pageHeaderService.placeholder = STAT_PLACEHOLDER;
    this.pageHeaderService.options = STAT_OPTIONS;
    this.pageHeaderService.datepicker = true;

    this.searchService.getPlayers('2017-2018').subscribe((players: Player[]) => {
      this.players = players;
      this.searchService.playersLoaded = true;
    });

    this.teams = this.searchService.getTeams();

    this.watchSelectedStat();

    this.watchDateRange();
  }

  getOptions(value: string) {
    if (value) {
      let players: Player[] = this.players.filter(player => this.selectedPlayers.findIndex(selectedPlayer => selectedPlayer === player) < 0 && (player.firstName.toLowerCase().indexOf(value.toLowerCase()) === 0 || player.lastName.toLowerCase().indexOf(value.toLowerCase()) === 0 || player.fullName.toLowerCase().indexOf(value.toLowerCase()) === 0));
      let teams: Team[] = this.teams.filter(team => this.selectedTeams.findIndex(selectedTeam => selectedTeam === team) < 0 && (team.city.toLowerCase().indexOf(value.toLowerCase()) === 0 || team.name.toLowerCase().indexOf(value.toLowerCase()) === 0 || `${team.city.toLowerCase()} ${team.name.toLowerCase()}`.indexOf(value.toLowerCase()) === 0));
      return [...players, ...teams];
    } else {
      return [];
    }
  }

  submit(event: KeyboardEvent) {
    if (event.keyCode === 13 && this.searchCtrl.value && (typeof this.searchCtrl.value) === 'string') {
      let player: Player = this.players.find(player => this.selectedPlayers.findIndex(selectedPlayer => selectedPlayer === player) < 0 && (player.fullName.toLowerCase().indexOf(this.searchCtrl.value.toLowerCase()) === 0 || player.lastName.toLowerCase().indexOf(this.searchCtrl.value.toLowerCase()) === 0 || player.firstName.toLowerCase().indexOf(this.searchCtrl.value.toLowerCase()) === 0));
      if (player) {
        this.selectPlayer(player);
        if (this.pageHeaderService.startDate && this.pageHeaderService.endDate) {
          this.getStats(this.selectedPlayers, this.pageHeaderService.startDate, this.pageHeaderService.endDate);
        }
      } else {
        let team: Team = this.teams.find(team => this.selectedTeams.findIndex(selectedTeam => selectedTeam === team) < 0 && (`${team.city.toLowerCase()} ${team.name.toLowerCase()}`.indexOf(this.searchCtrl.value.toLowerCase()) === 0 || team.name.toLowerCase().indexOf(this.searchCtrl.value.toLowerCase()) === 0 || team.city.toLowerCase().indexOf(this.searchCtrl.value.toLowerCase()) === 0));
        if (team) this.selectTeam(team);
      }
    }
  }

  select(option: Player | Team) {
    let player: Player = this.players.find(p => p === option);
    if (player) {
      this.selectPlayer(player);
      if (this.pageHeaderService.startDate && this.pageHeaderService.endDate) {
        this.getStats(this.selectedPlayers, this.pageHeaderService.startDate, this.pageHeaderService.endDate);
      }
    } else {
      let team: Team = this.teams.find(t => t === option);
      if (team) this.selectTeam(team);
    }
  }

  removePlayer(player: Player) {
    this.selectedPlayers.splice(this.selectedPlayers.indexOf(player), 1);
    this.lineChart = this.lineChart.filter(playerSeries => {
      return playerSeries.name !== player.fullName;
    });
  }

  removeTeam(team: Team) {
    this.selectedTeams.splice(this.selectedTeams.indexOf(team), 1);
  }

  isScreenSmall(): boolean {
    return window.matchMedia(`(max-width: ${SMALL_WIDTH_BREAKPOINT}px)`).matches;
  }

  clearSelections() {
    this.selectedPlayers = [];
    this.selectedTeams = [];
    this.panel.close();
  }

  private watchSelectedStat() {
    this.statsService.selectedStat$.subscribe((selectedStat: Stat) => {
      if (selectedStat) {
        this.legendTitle = selectedStat.name;
        if (this.pageHeaderService.startDate && this.pageHeaderService.endDate && this.selectedPlayers.length > 0) {
          this.buildChart();
        }
      }
    });
  }

  private watchDateRange() {
    Observable.combineLatest(this.pageHeaderService.startDate$, this.pageHeaderService.endDate$).subscribe( ([startDate, endDate]: [Date, Date]) => {
      if (startDate && endDate) {
        if (this.selectedPlayers.length > 0) {
          this.getStats(this.selectedPlayers, startDate, endDate);
        }
      }
    });
  }

  private getStats(players: Player[], start: Date, end: Date) {
    this.statsSubscriptions.forEach(subscription => subscription.unsubscribe());
    this.statsSubscriptions.clear();
    this.statsService.statsLoadedMap.clear();
    this.selectedPlayers.forEach(player => player.stats = []);
    this.lineChart = [];
    this.statsService.getPlayerStats(players, start, end).forEach((seasonStats, index) => {
      this.statsService.statsLoadedMap.set(index, false);
      let subscription: Subscription = seasonStats.subscribe(stats => {
        this.selectedPlayers.forEach(player => {
          if (player.stats) {
            player.stats = player.stats.concat(stats.filter(gameStats => player.id === gameStats.playerId));
          } else {
            player.stats = stats.filter(gameStats => player.id === gameStats.playerId);
          }
        });
        this.statsService.statsLoadedMap.set(index, true);
        this.buildChart();
      });
      this.statsSubscriptions.set(index, subscription);
    });
  }

  private buildChart() {
    this.lineChart = [];
    if (this.statsService.stat) {
      this.selectedPlayers.forEach(player => {
        if (player.stats) {
          let playerSeries: LineChartSeries = { name: player.fullName, series: [] };
          player.stats.map(gameLog => {
            playerSeries.series.push({name: gameLog.game.date, value: gameLog[this.statsService.stat.category][this.statsService.stat.key].value});
          });
          this.lineChart.push(playerSeries);
        }
      });
    }
  }

  private selectPlayer(player: Player) {
    this.selectedPlayers.push(player);
    this.searchCtrl.setValue('');
  }

  private selectTeam(team: Team) {
    this.selectedTeams.push(team);
    this.searchCtrl.setValue('');
  }

}
