import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import { PageTitleService } from '../shared/page-title/page-title';
import { DataService } from '../shared/data/data.service';
import {
  ConferenceStandings, DivisionStandings, League, LeagueStandings,
  WildCardStandings
} from '../shared/data/data-types';
import { LeagueService } from '../shared/data/league.service';
import {Router} from "@angular/router";

const SMALL_WIDTH_BREAKPOINT = 840;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger('flyInOut', [
      state('in', style({transform: 'translateY(0)'})),
      transition('void => *', [
        style({transform: 'translateY(100%)'}),
        animate(500)
      ]),
      transition('* => void', [
        animate(100, style({transform: 'translateY(-100%)'}))
      ])
    ]),
    trigger('fadeInOut', [
      state('in', style({opacity: 1})),
      transition('void => *', [
        style({opacity: 1}),
        animate(1000)
      ]),
      transition('* => void', [
        animate(250, style({opacity: 0}))
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {

  league: League;
  divisionLoaded: boolean = false;
  conferenceLoaded: boolean = false;
  leagueLoaded: boolean = false;
  wildCardLoaded: boolean = false;

  constructor(private pageTitleService: PageTitleService, private dataService: DataService, private leagueService: LeagueService) {}

  ngOnInit() {
    this.pageTitleService.title = 'Standings';

    this.league = this.leagueService.buildLeague();

    this.dataService.get('2017-2018-regular', 'division_team_standings', {playerstats:'none', teamstats: 'none'}).subscribe((standings: DivisionStandings[]) => {
      standings.forEach(division => {
        switch (division.division) {
          case 'Eastern/Atlantic':
            this.league.easternConference.atlanticDivision.standings = division;
            break;
          case 'Eastern/Metropolitan':
            this.league.easternConference.metropolitalDivision.standings = division;
            break;
          case 'Western/Central':
            this.league.westernConference.centralDivision.standings = division;
            break;
          case 'Western/Pacific':
            this.league.westernConference.pacificDivision.standings = division;
            break;
        }
      });
      this.divisionLoaded = true;
    });

    this.dataService.get('2017-2018-regular', 'conference_team_standings', {playerstats: 'none', teamstats: 'none'}).subscribe((standings: ConferenceStandings[]) => {
      standings.forEach(conference => {
        switch (conference.conference) {
          case 'Eastern':
            this.league.easternConference.standings = conference;
            break;
          case 'Western':
            this.league.westernConference.standings = conference;
            break;
        }
      });
      this.conferenceLoaded = true;
    });

    this.dataService.get('2017-2018-regular', 'overall_team_standings', {playerstats: 'none', teamstats: 'none'}).subscribe((standings: LeagueStandings) => {
      this.league.standings = standings;
      this.leagueLoaded = true;
    });

    this.dataService.get('2017-2018-regular', 'playoff_team_standings', {playerstats: 'none', teamstats: 'none'}).subscribe((standings: WildCardStandings[]) => {
      standings.forEach(conference => {
        switch (conference.conference) {
          case 'Eastern':
            this.league.easternConference.wildCardStandings = conference;
            break;
          case 'Western':
            this.league.westernConference.wildCardStandings = conference;
            break;
        }
      });
      this.wildCardLoaded = true;
    });
  }

  isScreenSmall(): boolean {
    return window.matchMedia(`(max-width: ${SMALL_WIDTH_BREAKPOINT}px)`).matches;
  }

  getRowHeight(type: string): string {
    switch (type) {
      case 'division':
        if (this.isScreenSmall()) {
          return '1:8';
        }
        return '1:3';
      case 'conference':
        if (this.isScreenSmall()) {
          return '1:7.5';
        }
        return '1:3.5';
      case 'league':
        if (this.isScreenSmall()) {
          return '1:7.25';
        }
        return '1:3.25';
    }
  }


}
