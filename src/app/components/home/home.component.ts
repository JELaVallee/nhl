import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { PageTitleService } from '../shared/page-title/page-title';
import { DataService } from '../shared/data/data.service';
import { League } from '../shared/data/data-types';
import { LeagueService } from '../shared/data/league.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
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
