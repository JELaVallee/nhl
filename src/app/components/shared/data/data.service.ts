import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import {ConferenceStandings, DivisionStandings, LeagueStandings, Team, WildCardStandings} from './data-types';
import {
  ConferenceStandingsResponse, DivisionStandingsResponse, LeagueStandingsResponse, PlayoffStandingsResponse,
  StandingsResponseTeamEntry
} from './response-interfaces';

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

  divisionLoaded: boolean = false;
  conferenceLoaded: boolean = false;
  leagueLoaded: boolean = false;
  wildCardLoaded: boolean = false;
  standingsSeason$: Observable<string>;
  private base: string = 'https://www.mysportsfeeds.com/api/feed/pull/nhl/';
  private format: string = '.json?';
  private currentStandingsSeason: string = '2017-2018-regular';
  private standingsSeasonSource: BehaviorSubject<string> = new BehaviorSubject<string>(this.currentStandingsSeason);

  constructor(private http: Http) {
    this.standingsSeason$ = new Observable(fn => this.standingsSeasonSource.subscribe(fn));
  }

  set selectedSeason(value: string) {
    this.currentStandingsSeason = value;
    this.standingsSeasonSource.next(this.currentStandingsSeason);
  }

  get selectedSeason(): string {
    return this.currentStandingsSeason;
  }

  unLoad() {
    this.divisionLoaded = false;
    this.conferenceLoaded = false;
    this.leagueLoaded = false;
    this.wildCardLoaded = false;
  }

  getStandings(feed: string, params: Params): Observable<DivisionStandings[] | ConferenceStandings[] | LeagueStandings | WildCardStandings[]> {
    return this.standingsSeason$.switchMap(season => {
      this.unLoad();
      let urlSearchParams: URLSearchParams = new URLSearchParams();
      for (let p in params) {
        urlSearchParams.set(p, params[p]);
      }
      return this.http.get(`${this.base}${this.selectedSeason}/${feed}${this.format}`, { params: urlSearchParams });
    }).map((response: Response) => {
      if (response.json()) {
        if (response.json().divisionteamstandings) {
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
            });
          });
          return divisionStandings;
        } else if (response.json().conferenceteamstandings) {
          let responseData: ConferenceStandingsResponse = response.json();
          let conferenceStandings: ConferenceStandings[] = [];
          responseData.conferenceteamstandings.conference.forEach(conference => {
            conferenceStandings.push({
              lastUpdated : new Date(responseData.conferenceteamstandings.lastUpdatedOn),
              conference: conference['@name'],
              teams: conference.teamentry.map((entry: StandingsResponseTeamEntry) => {
                return {
                  rank: parseInt(entry.rank),
                  team: new Team(entry.team.City, entry.team.Name, entry.team.Abbreviation)
                };
              })
            });
          });
          return conferenceStandings;
        } else if (response.json().overallteamstandings) {
          let responseData: LeagueStandingsResponse = response.json();
          let leagueStandings: LeagueStandings = new LeagueStandings();
          leagueStandings.lastUpdated = new Date(responseData.overallteamstandings.lastUpdatedOn),
          leagueStandings.teams = responseData.overallteamstandings.teamstandingsentry.map((entry: StandingsResponseTeamEntry) => {
            return {
              rank: parseInt(entry.rank),
              team: new Team(entry.team.City, entry.team.Name, entry.team.Abbreviation)
            };
          });
          return leagueStandings;
        } else if (response.json().playoffteamstandings) {
          let responseData: PlayoffStandingsResponse = response.json();
          let wildCardStandings: WildCardStandings[] = [];
          responseData.playoffteamstandings.conference.forEach(conference => {
            wildCardStandings.push({
              lastUpdated : new Date(responseData.playoffteamstandings.lastUpdatedOn),
              conference: conference['@name'],
              teams: conference.teamentry.map((entry: StandingsResponseTeamEntry) => {
                return {
                  rank: parseInt(entry.rank),
                  team: new Team(entry.team.City, entry.team.Name, entry.team.Abbreviation)
                };
              })
            });
          });
          return wildCardStandings;
        }
      }
    });
  }

}
