import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import {DivisionStandings, Team} from './data-types';
import { DivisionStandingsResponse, StandingsResponseTeamEntry } from './response-interfaces';

export interface Params {
  team?: string,
  division?: string,
  playerstats?: string,
  sort?: string,
  offset?: string,
  limit?: string,
  force?: string,
  teamstats?: string,
}

@Injectable()
export class DataService {

  private base: string = 'https://www.mysportsfeeds.com/api/feed/pull/nhl/';
  private format: string = '.json?';

  constructor(private http: Http) {

  }

  get(season: string, feed: string, params: Params): Observable<DivisionStandings[]> {
    let urlSearchParams: URLSearchParams = new URLSearchParams();
    for (let p in params) {
      urlSearchParams.set(p, params[p]);
    }
    return this.http.get(`${this.base}${season}/${feed}${this.format}`, { params: urlSearchParams }).map((response: Response) => {
      if (response.json()) {
        let responseData: DivisionStandingsResponse = response.json();
        let divisionStandings: DivisionStandings[] = [];
        responseData.divisionteamstandings.division.forEach(division => {
          divisionStandings.push({
            lastUpdated : new Date(responseData.divisionteamstandings.lastUpdatedOn),
            division : division['@name'],
            teams : division.teamentry.map((entry: StandingsResponseTeamEntry) => {
              return {
                rank: parseInt(entry.rank),
                team: new Team(entry.team.City, entry.team.Name, entry.team.Abbreviation)
              };
            })
          })

        });
        return divisionStandings;
      }
    });
  }

}
