import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { EasternConference, League, OldEasternConference, OldWesternConference, WesternConference } from './data-types';
import { SeasonService } from './season.service';

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
      return this.league;
    });
  }

}
