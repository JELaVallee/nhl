import { Component, OnInit, ViewChild } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import {
  HISTORY_TITLE, PageHeaderService, STAT_OPTIONS,
  STAT_PLACEHOLDER
} from '../shared/services/page-header/page-header';
import { FormControl } from "@angular/forms";
import { SearchService } from '../shared/services/search/search.service';
import { Player } from '../shared/data/player';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/combineLatest';
import { MdExpansionPanel } from '@angular/material';
import { Team } from '../shared/data/team';
import { StatsService } from '../shared/services/stats/stats.service';

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
  @ViewChild(MdExpansionPanel) panel : MdExpansionPanel;

  constructor(public searchService: SearchService, private pageHeaderService: PageHeaderService, private statsService: StatsService) {
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

    this.statsService.selectedStat$.subscribe((selectedStat: string) => {
      console.log(selectedStat);
    });

    Observable.combineLatest(this.pageHeaderService.startDate$, this.pageHeaderService.endDate$).subscribe( ([startDate, endDate]: [Date, Date]) => {
      if (startDate && endDate) {
        console.log(`${startDate.toDateString()} - ${endDate.toDateString()}`);
      }
    });
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
    } else {
      let team: Team = this.teams.find(t => t === option);
      if (team) this.selectTeam(team);
    }
  }

  removePlayer(player: Player) {
    this.selectedPlayers.splice(this.selectedPlayers.indexOf(player), 1);
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

  private selectPlayer(player: Player) {
    this.selectedPlayers.push(player);
    this.searchCtrl.setValue('');
  }

  private selectTeam(team: Team) {
    this.selectedTeams.push(team);
    this.searchCtrl.setValue('');
  }

}
