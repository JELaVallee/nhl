import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { ConferenceStandings, DivisionStandings, LeagueStandings, Team, WildCardStandings } from '../../data';
import {
  ConferenceStandingsResponse, DivisionStandingsResponse, LeagueStandingsResponse, PlayoffStandingsResponse,
  StandingsResponseTeamEntry
} from '../../data/response-interfaces';
import { SeasonService } from '../season/season.service';
import { StandingsTeamEntry } from '../../data/standings';

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
      return this.http.get(`${this.base}${season}-regular/${feed}${this.format}`, { params: urlSearchParams });
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
      gamesPlayed: { abbreviation: entry.stats.GamesPlayed['@abbreviation'], value: entry.stats.GamesPlayed['#text']},
      faceoffLosses: { abbreviation: entry.stats.stats.FaceoffLosses['@abbreviation'], value: entry.stats.stats.FaceoffLosses['#text']},
      faceoffPercent: { abbreviation: entry.stats.stats.FaceoffPercent['@abbreviation'], value: entry.stats.stats.FaceoffWins['#text']},
      faceoffWins: { abbreviation: entry.stats.stats.FaceoffWins['@abbreviation'], value: entry.stats.stats.FaceoffWins['#text']},
      goalsAgainst: { abbreviation: entry.stats.stats.GoalsAgainst['@abbreviation'], value: entry.stats.stats.GoalsAgainst['#text']},
      goalsFor: { abbreviation: entry.stats.stats.GoalsFor['@abbreviation'], value: entry.stats.stats.GoalsFor['#text']},
      hits: { abbreviation: entry.stats.stats.Hits['@abbreviation'], value: entry.stats.stats.Hits['#text']},
      losses: { abbreviation: entry.stats.stats.Losses['@abbreviation'], value: entry.stats.stats.Losses['#text']},
      overtimeLosses: { abbreviation: entry.stats.stats.OvertimeLosses['@abbreviation'], value: entry.stats.stats.OvertimeLosses['#text']},
      overtimeWins: { abbreviation: entry.stats.stats.OvertimeWins['@abbreviation'], value: entry.stats.stats.OvertimeWins['#text']},
      penalties: { abbreviation: entry.stats.stats.Penalties['@abbreviation'], value: entry.stats.stats.Penalties['#text']},
      penaltyKillGoalsAllowed: { abbreviation: entry.stats.stats.PenaltyKillGoalsAllowed['@abbreviation'], value: entry.stats.stats.PenaltyKillGoalsAllowed['#text']},
      penaltyKillPercent: { abbreviation: entry.stats.stats.PenaltyKillPercent['@abbreviation'], value: entry.stats.stats.PenaltyKillPercent['#text']},
      penaltyKills: { abbreviation: entry.stats.stats.PenaltyKills['@abbreviation'], value: entry.stats.stats.PenaltyKills['#text']},
      penaltyMinutes: { abbreviation: entry.stats.stats.PenaltyMinutes['@abbreviation'], value: entry.stats.stats.PenaltyMinutes['#text']},
      points: { abbreviation: entry.stats.stats.Points['@abbreviation'], value: entry.stats.stats.Points['#text']},
      powerplayGoals: { abbreviation: entry.stats.stats.PowerplayGoals['@abbreviation'], value: entry.stats.stats.PowerplayGoals['#text']},
      powerplayPercent: { abbreviation: entry.stats.stats.PowerplayPercent['@abbreviation'], value: entry.stats.stats.PowerplayPercent['#text']},
      powerplays: { abbreviation: entry.stats.stats.Powerplays['@abbreviation'], value: entry.stats.stats.Powerplays['#text']},
      shorthandedGoalsAgainst: { abbreviation: entry.stats.stats.ShorthandedGoalsAgainst['@abbreviation'], value: entry.stats.stats.ShorthandedGoalsAgainst['#text']},
      shorthandedGoalsFor: { abbreviation: entry.stats.stats.ShorthandedGoalsFor['@abbreviation'], value: entry.stats.stats.ShorthandedGoalsFor['#text']},
      shots: { abbreviation: entry.stats.stats.Shots['@abbreviation'], value: entry.stats.stats.Shots['#text']},
      wins: { abbreviation: entry.stats.stats.Wins['@abbreviation'], value: entry.stats.stats.Wins['#text']},
    }
  }

}
