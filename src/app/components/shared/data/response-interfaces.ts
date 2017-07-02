export interface StandingsResponseTeamEntry {
  team: {
    ID: string,
    City: string,
    Name: string,
    Abbreviation: string
  },
  rank: string,
}

export interface DivisionStandingsResponse {
  divisionteamstandings: {
    lastUpdatedOn: string,
    division: [{
      teamentry: StandingsResponseTeamEntry[]
    }]
  }
}

export interface ConferenceStandingsResponse {
  conferenceteamstandings: {
    lastUpdatedOn: string,
    conference: [{
      teamentry: StandingsResponseTeamEntry[]
    }]
  }
}

export interface PlayoffStandingsResponse {
  playoffteamstandings: {
    lastUpdatedOn: string,
    conference: [{
      teamentry: StandingsResponseTeamEntry[]
    }]
  }
}

export interface LeagueStandingsResponse {
  overallteamstandings: {
    lastUpdatedOn: string,
    teamstandingsentry: StandingsResponseTeamEntry[]
  }
}
