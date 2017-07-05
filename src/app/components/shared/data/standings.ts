import { Team } from './team';

export interface StandingsTeamEntry {
  rank: number,
  team: Team,
  stats: {
    gamesPlayed: { abbreviation: string, value: string },
    faceoffLosses: { abbreviation: string, value: string },
    faceoffPercent: { abbreviation: string, value: string },
    faceoffWins: { abbreviation: string, value: string },
    goalsAgainst: { abbreviation: string, value: string },
    goalsFor: { abbreviation: string, value: string },
    hits: { abbreviation: string, value: string },
    losses: { abbreviation: string, value: string },
    overtimeLosses: { abbreviation: string, value: string },
    overtimeWins: { abbreviation: string, value: string },
    penalties: { abbreviation: string, value: string },
    penaltyKillGoalsAllowed: { abbreviation: string, value: string },
    penaltyKillPercent: { abbreviation: string, value: string },
    penaltyKills: { abbreviation: string, value: string },
    penaltyMinutes: { abbreviation: string, value: string },
    points: { abbreviation: string, value: string },
    powerplayGoals: { abbreviation: string, value: string },
    powerplayPercent: { abbreviation: string, value: string },
    powerplays: { abbreviation: string, value: string },
    shorthandedGoalsAgainst: { abbreviation: string, value: string },
    shorthandedGoalsFor: { abbreviation: string, value: string },
    shots: { abbreviation: string, value: string },
    wins: { abbreviation: string, value: string }
  }
}

export class DivisionStandings {
  lastUpdated: Date;
  division: string;
  teams: StandingsTeamEntry[];
}

export class ConferenceStandings {
  lastUpdated: Date;
  conference: string;
  teams: StandingsTeamEntry[];
}

export class WildCardStandings {
  lastUpdated: Date;
  conference: string;
  teams: StandingsTeamEntry[];
}

export class LeagueStandings {
  lastUpdated: Date;
  teams: StandingsTeamEntry[];
}
