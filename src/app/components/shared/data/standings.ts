import { Team } from './team';

export interface StandingsTeamEntry {
  rank: number,
  team: Team
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
