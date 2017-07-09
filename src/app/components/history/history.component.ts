import { Component, OnInit } from '@angular/core';
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
  players: Player[] = [];
  filteredPlayers: Observable<Player[]>;
  selectedPlayers: Player[] = [];

  constructor(public searchService: SearchService, private pageHeaderService: PageHeaderService) {
    this.filteredPlayers = this.searchCtrl.valueChanges.startWith(null).map(search => {
      if ((typeof search) === 'string') {
        return this.getPlayers(search);
      }
    });
  }

  ngOnInit() {
    this.pageHeaderService.title = HISTORY_TITLE;
    this.pageHeaderService.placeholder = STAT_PLACEHOLDER;
    this.pageHeaderService.options = STAT_OPTIONS;

    this.searchService.getPlayers('2017-2018').subscribe((players: Player[]) => {
      this.players = players;
      this.searchService.playersLoaded = true;
    });
  }

  getPlayers(value: string) {
    return value ? this.players.filter(player => this.selectedPlayers.findIndex(selectedPlayer => selectedPlayer === player) < 0 && (player.firstName.toLowerCase().indexOf(value.toLowerCase()) === 0 || player.lastName.toLowerCase().indexOf(value.toLowerCase()) === 0 || player.fullName.toLowerCase().indexOf(value.toLowerCase()) === 0)) : [];
  }

  submit(event: KeyboardEvent) {
    if (event.keyCode === 13 && this.searchCtrl.value && (typeof this.searchCtrl.value) === 'string') {
      this.select(this.players.find(player => player.fullName.toLowerCase().indexOf(this.searchCtrl.value.toLowerCase()) === 0 || player.lastName.toLowerCase().indexOf(this.searchCtrl.value.toLowerCase()) === 0 || player.firstName.toLowerCase().indexOf(this.searchCtrl.value.toLowerCase()) === 0));
    }
  }

  select(player: Player) {
    if (player) {
      this.selectedPlayers.push(player);
    }
    this.searchCtrl.setValue('');
  }

  remove(player: Player) {
    this.selectedPlayers.splice(this.selectedPlayers.indexOf(player), 1);
  }

}
