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
import { League } from '../shared/data/data-types';
import { LeagueService } from '../shared/data/league.service';

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
  standingsLoaded: boolean = false;

  constructor(private pageTitleService: PageTitleService, private dataService: DataService, private leagueService: LeagueService) {}

  ngOnInit() {
    this.pageTitleService.title = 'Division Standings';

    this.league = this.leagueService.buildLeague();

    this.dataService.get('2017-2018-regular', 'division_team_standings', {playerstats:'none', teamstats: 'none'}).subscribe(standings => {
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
      this.standingsLoaded = true;
      console.log(this.league);
    });
  }

}
