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
    IsRookie: string,
    ID: string
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

export interface PlayerGameLog {
  game: {
    id: string,
    date: string,
    time: string,
    awayTeam: {
      City: string,
      Name: string,
      Abbreviation: string
    },
    homeTeam: {
      City: string,
      Name: string,
      Abbreviation: string
    },
    location: string
  },
  player: {
    LastName: string,
    FirstName: string,
    JerseyNumber: string,
    Position: string,
    ID: string
  },
  team: {
    City: string,
    Name: string,
    Abbreviation: string
  },
  stats: {
    Goals: { "#text": string, "@abbreviation": string, "@category": string },
    Assists: { "#text": string, "@abbreviation": string, "@category": string },
    HatTricks: { "#text": string, "@abbreviation": string, "@category": string },
    GameTyingGoals: { "#text": string, "@abbreviation": string, "@category": string },
    Penalties: { "#text": string, "@abbreviation": string, "@category": string },
    GameWinningGoals: { "#text": string, "@abbreviation": string, "@category": string },
    ShorthandedPoints: { "#text": string, "@abbreviation": string, "@category": string },
    PowerplayPoints: { "#text": string, "@abbreviation": string, "@category": string },
    PenaltyMinutes: { "#text": string, "@abbreviation": string, "@category": string },
    Points: { "#text": string, "@abbreviation": string, "@category": string },
    PowerplayGoals: { "#text": string, "@abbreviation": string, "@category": string },
    PowerplayAssists: { "#text": string, "@abbreviation": string, "@category": string },
    ShorthandedGoals: { "#text": string, "@abbreviation": string, "@category": string },
    ShorthandedAssists: { "#text": string, "@abbreviation": string, "@category": string },
    Faceoffs?: { "#text": string, "@abbreviation": string, "@category": string },
    FaceoffLosses?: { "#text": string, "@abbreviation": string, "@category": string },
    FaceoffPercent?: { "#text": string, "@abbreviation": string, "@category": string },
    FaceoffWins?: { "#text": string, "@abbreviation": string, "@category": string },
    Hits?: { "#text": string, "@abbreviation": string, "@category": string },
    PlusMinus?: { "#text": string, "@abbreviation": string, "@category": string },
    Shots?: { "#text": string, "@abbreviation": string, "@category": string },
    Wins?: { "#text": string, "@abbreviation": string, "@category": string },
    CreditForGame?: { "#text": string, "@abbreviation": string, "@category": string },
    GoalsAgainst?: { "#text": string, "@abbreviation": string, "@category": string },
    GoalsAgainstAverage?: { "#text": string, "@abbreviation": string, "@category": string },
    Losses?: { "#text": string, "@abbreviation": string, "@category": string },
    MinutesPlayed?: { "#text": string, "@abbreviation": string, "@category": string },
    OvertimeLosses?: { "#text": string, "@abbreviation": string, "@category": string },
    OvertimeWins?: { "#text": string, "@abbreviation": string, "@category": string },
    Saves?: { "#text": string, "@abbreviation": string, "@category": string },
    ShotsAgainst?: { "#text": string, "@abbreviation": string, "@category": string },
    Shutouts?: { "#text": string, "@abbreviation": string, "@category": string },
    SavePercentage?: { "#text": string, "@abbreviation": string, "@category": string },
    GamesStarted?: {"#text": string, "@abbreviation": string, "@category": string }
  }
}

export interface PlayerGameLogsResponse {
  playergamelogs: {
    lastUpdatedOn: string,
    gamelogs: PlayerGameLog[]
  }
}
