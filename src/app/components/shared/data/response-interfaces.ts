export interface StandingsResponseTeamEntry {
  team: {
    ID: string,
    City: string,
    Name: string,
    Abbreviation: string
  },
  rank: string,
  stats: {
    GamesPlayed: {
      "#text": string,
      "@abbreviation": string
    },
    stats: {
      FaceoffLosses: { "#text": string, "@abbreviation": string },
      FaceoffPercent: { "#text": string, "@abbreviation": string },
      FaceoffWins: { "#text": string, "@abbreviation": string },
      GoalsAgainst: { "#text": string, "@abbreviation": string },
      GoalsFor: { "#text": string, "@abbreviation": string },
      Hits: { "#text": string, "@abbreviation": string },
      Losses: { "#text": string, "@abbreviation": string },
      OvertimeLosses: { "#text": string, "@abbreviation": string },
      OvertimeWins: { "#text": string, "@abbreviation": string },
      Penalties: { "#text": string, "@abbreviation": string },
      PenaltyKillGoalsAllowed: { "#text": string, "@abbreviation": string },
      PenaltyKillPercent: { "#text": string, "@abbreviation": string },
      PenaltyKills: { "#text": string, "@abbreviation": string },
      PenaltyMinutes: { "#text": string, "@abbreviation": string },
      Points: { "#text": string, "@abbreviation": string },
      PowerplayGoals: { "#text": string, "@abbreviation": string },
      PowerplayPercent: { "#text": string, "@abbreviation": string },
      Powerplays: { "#text": string, "@abbreviation": string },
      ShorthandedGoalsAgainst: { "#text": string, "@abbreviation": string },
      ShorthandedGoalsFor: { "#text": string, "@abbreviation": string },
      Shots: { "#text": string, "@abbreviation": string },
      Wins: { "#text": string, "@abbreviation": string },
    }
  }
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

export interface PlayersResponsePlayerEntry {
  player: {
    LastName: string,
    FirstName: string,
    JerseyNumber: string,
    Position: string,
    Height: string,
    Weight: string,
    BirthDate: string,
    Age: string,
    BirthCity: string,
    BirthCountry: string,
    IsRookie: string
  },
  team?: {
    City: string,
    Name: string,
    Abbreviation: string
  }
}

export interface ActivePlayersResponse {
  activeplayers: {
    lastUpdatedOn: string,
    playerentry: PlayersResponsePlayerEntry[]
  }
}
