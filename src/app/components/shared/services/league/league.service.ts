import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { EasternConference, League, OldEasternConference, OldWesternConference, WesternConference } from '../../data';
import { SeasonService } from '../season/season.service';

@Injectable()
export class LeagueService {

  league: League = new League();
  private easternConference: EasternConference = new EasternConference();
  private westernconference: WesternConference = new WesternConference();
  private oldEasternConference: OldEasternConference = new OldEasternConference();
  private oldWesternConference: OldWesternConference = new OldWesternConference();

  constructor(private seasonService: SeasonService) { }

  buildLeague(): Observable<League> {
    return this.seasonService.standingsSeason$.map(season => {
      if (this.seasonService.oldLeagueFormat()) {
        this.league.easternConference = this.oldEasternConference;
        this.league.easternConference.southeastDivision.season = season;
        this.league.westernConference = this.oldWesternConference;
      } else {
        this.league.easternConference = this.easternConference;
        this.league.westernConference = this.westernconference;
      }
      this.league.teams = [...this.league.easternConference.teams, ...this.league.westernConference.teams];
      return this.league;
    });
  }

}
