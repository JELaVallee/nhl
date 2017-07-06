import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { MD_DIALOG_DATA } from '@angular/material';

export interface Card {
  name: string,
  value: number | string
}

const SMALL_WIDTH_BREAKPOINT = 840;

@Component({
  selector: 'app-team-stats-dialog',
  templateUrl: './team-stats-dialog.component.html',
  styleUrls: ['./team-stats-dialog.component.scss']
})
export class TeamStatsDialogComponent implements OnInit {

  cards: Card[] = [];
  view: number[] = [800, 600];
  colorScheme = {domain: []};

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if (this.isScreenSmall()) {
      this.view = [200, 2400];
    } else {
      this.view = [800, 600];
    }
  }

  constructor(@Inject(MD_DIALOG_DATA) public data) { }

  ngOnInit() {
    if (this.isScreenSmall()) {
      this.view = [200, 2400];
    }

    if (['Toronto', 'Tampa Bay', 'Detroit'].includes(this.data.team.city)) {
      this.colorScheme.domain = [this.data.team.colors.warn];
    } else {
      this.colorScheme.domain = [this.data.team.colors.accent];
    }

    for (let c in this.data.entry.stats) {
      this.cards.push({name: this.data.entry.stats[c].abbreviation, value: this.data.entry.stats[c].value});
    }
    console.log(this.data);
  }

  select(event) {
    console.log(event);
  }

  private isScreenSmall(): boolean {
    return window.matchMedia(`(max-width: ${SMALL_WIDTH_BREAKPOINT}px)`).matches;
  }

}
