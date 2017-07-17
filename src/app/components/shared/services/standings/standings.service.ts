import { Injectable } from '@angular/core';
import { Headers, Http, Response, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import { ConferenceStandings, DivisionStandings, LeagueStandings, Team, WildCardStandings } from '../../data';
import {
  ConferenceStandingsResponse, DivisionStandingsResponse, LeagueStandingsResponse, Params, PlayoffStandingsResponse,
  StandingsResponseTeamEntry
} from '../../data/response-interfaces';
import { SeasonService } from '../season/season.service';
import { StandingsTeamEntry } from '../../data/standings';



@Injectable()
export class StandingsService {

  divisionLoaded: boolean = false;
  conferenceLoaded: boolean = false;
  leagueLoaded: boolean = false;
  wildCardLoaded: boolean = false;
  private base: string = 'https://www.mysportsfeeds.com/api/feed/pull/nhl/';
  private format: string = '.json?';

  constructor(private http: Http, private seasonService: SeasonService) {}

  unLoad() {
    this.divisionLoaded = false;
    this.conferenceLoaded = false;
    this.leagueLoaded = false;
    this.wildCardLoaded = false;
  }

  getStandings(feed: string, params: Params): Observable<DivisionStandings[] | ConferenceStandings[] | LeagueStandings | WildCardStandings[]> {
    return this.seasonService.standingsSeason$.switchMap(season => {
      this.unLoad();
      let urlSearchParams: URLSearchParams = new URLSearchParams();
      for (let p in params) {
        urlSearchParams.set(p, params[p]);
      }
      return this.http.get(`${this.base}${season}-regular/${feed}${this.format}`, { params: urlSearchParams, headers: new Headers({Authorization: `Basic ${btoa('dweitz43:dallasStars43')}`}) });
    }).map((response: Response) => {
      if (response.json()) {
        if (response.json().divisionteamstandings) {
          return this.processDivisionStandings(response.json());
        } else if (response.json().conferenceteamstandings) {
          return this.processConferenceStandings(response.json());
        } else if (response.json().overallteamstandings) {
          return this.processLeagueStandings(response.json());
        } else if (response.json().playoffteamstandings) {
          return this.processWildCardStandings(response.json());
        }
      }
    });
  }

  private processDivisionStandings(responseData: DivisionStandingsResponse): DivisionStandings[] {
    let divisionStandings: DivisionStandings[] = [];
    responseData.divisionteamstandings.division.forEach(division => {
      divisionStandings.push({
        lastUpdated : new Date(responseData.divisionteamstandings.lastUpdatedOn),
        division : division['@name'],
        teams : division.teamentry.map((entry: StandingsResponseTeamEntry) => {
          return this.createStandingsTeamEntry(entry);
        })
      });
    });
    return divisionStandings;
  }

  private processConferenceStandings(responseData: ConferenceStandingsResponse): ConferenceStandings[] {
    let conferenceStandings: ConferenceStandings[] = [];
    responseData.conferenceteamstandings.conference.forEach(conference => {
      conferenceStandings.push({
        lastUpdated : new Date(responseData.conferenceteamstandings.lastUpdatedOn),
        conference: conference['@name'],
        teams: conference.teamentry.map((entry: StandingsResponseTeamEntry) => {
          return this.createStandingsTeamEntry(entry);
        })
      });
    });
    return conferenceStandings;
  }

  private processLeagueStandings(responseData: LeagueStandingsResponse): LeagueStandings {
    let leagueStandings: LeagueStandings = new LeagueStandings();
    leagueStandings.lastUpdated = new Date(responseData.overallteamstandings.lastUpdatedOn),
      leagueStandings.teams = responseData.overallteamstandings.teamstandingsentry.map((entry: StandingsResponseTeamEntry) => {
        return this.createStandingsTeamEntry(entry);
      });
    return leagueStandings;
  }

  private processWildCardStandings(responseData: PlayoffStandingsResponse): WildCardStandings[] {
    let wildCardStandings: WildCardStandings[] = [];
    responseData.playoffteamstandings.conference.forEach(conference => {
      wildCardStandings.push({
        lastUpdated : new Date(responseData.playoffteamstandings.lastUpdatedOn),
        conference: conference['@name'],
        teams: conference.teamentry.map((entry: StandingsResponseTeamEntry) => {
          return this.createStandingsTeamEntry(entry);
        })
      });
    });
    return wildCardStandings;
  }

  private createStandingsTeamEntry(entry: StandingsResponseTeamEntry): StandingsTeamEntry {
    if (entry.team.City === 'Arizona' && this.seasonService.phoenixSeason()) {
      return {
        rank: parseInt(entry.rank),
        team: new Team('Phoenix', entry.team.Name, 'PHX'),
        stats: this.mapStats(entry)
      };
    }
    return {
      rank: parseInt(entry.rank),
      team: new Team(entry.team.City, entry.team.Name, entry.team.Abbreviation),
      stats: this.mapStats(entry)
    };
  }

  private mapStats(entry: StandingsResponseTeamEntry) {
    return {
      games: {
        gamesPlayed: { abbreviation: 'Games Played', value: entry.stats.GamesPlayed['#text']},
        points: { abbreviation: 'Points', value: entry.stats.stats.Points['#text']},
        wins: { abbreviation: 'Wins', value: entry.stats.stats.Wins['#text']},
        losses: { abbreviation: 'Losses', value: entry.stats.stats.Losses['#text']},
        overtimeLosses: { abbreviation: 'Overtime Losses', value: entry.stats.stats.OvertimeLosses['#text']}
      },
      misc: {
        shots: { abbreviation: 'Shots', value: entry.stats.stats.Shots['#text']},
        goalsFor: { abbreviation: 'Goals For', value: entry.stats.stats.GoalsFor['#text']},
        goalsAgainst: { abbreviation: 'Goals Against', value: entry.stats.stats.GoalsAgainst['#text']},
        hits: { abbreviation: 'Hits', value: entry.stats.stats.Hits['#text']}
      },
      faceoff: {
        faceoffPercent: { abbreviation: 'Faceoff Percent', value: entry.stats.stats.FaceoffPercent['#text']},
        faceoffWins: { abbreviation: 'Faceoff Wins', value: entry.stats.stats.FaceoffWins['#text']},
        faceoffLosses: { abbreviation: 'Faceoff Losses', value: entry.stats.stats.FaceoffLosses['#text']}
      },
      powerplay: {
        powerplays: { abbreviation: 'Powerplays', value: entry.stats.stats.Powerplays['#text']},
        powerplayPercent: { abbreviation: 'Powerplay Percent', value: entry.stats.stats.PowerplayPercent['#text']},
        powerplayGoals: { abbreviation: 'Powerplay Goals', value: entry.stats.stats.PowerplayGoals['#text']},
        shorthandedGoalsFor: { abbreviation: 'Shorthanded Goals For', value: entry.stats.stats.ShorthandedGoalsFor['#text']},
        shorthandedGoalsAgainst: { abbreviation: 'Shorthanded Goals Against', value: entry.stats.stats.ShorthandedGoalsAgainst['#text']}
      },
      penalty: {
        penalties: { abbreviation: 'Penalties', value: entry.stats.stats.Penalties['#text']},
        penaltyMinutes: { abbreviation: 'Penalty Minutes', value: entry.stats.stats.PenaltyMinutes['#text']},
        penaltyKills: { abbreviation: 'Penalty Kills', value: entry.stats.stats.PenaltyKills['#text']},
        penaltyKillPercent: { abbreviation: 'Penalty Kill Percent', value: entry.stats.stats.PenaltyKillPercent['#text']}
      }
    }
  }

}
