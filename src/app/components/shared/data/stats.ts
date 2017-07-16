import { Game } from './';
import { DropdownOption } from '../services/page-header/page-header';

export class Stat implements DropdownOption {
  name: string;
  abbreviation: string;
  category: string;

  constructor(name: string, abbreviation: string, category: string) {
    this.name = name;
    this.abbreviation = abbreviation;
    this.category = category;
  }
}

export const STAT_OPTIONS: Stat[] = [
  { name: 'Goals', abbreviation: 'G', category: 'scoring' },
  { name: 'Assists', abbreviation: 'A', category: 'scoring' },
  { name: 'Points', abbreviation: 'Pts', category: 'scoring' },
  { name: 'Hat Tricks', abbreviation: 'Hat', category: 'scoring' },
  { name: 'Plus / Minus', abbreviation: '+/-', category: 'skating' },
  { name: 'Shots', abbreviation: 'Sh', category: 'skating' },
  { name: 'Penalties', abbreviation: 'Pn', category: 'skating' },
  { name: 'Penalty Minutes', abbreviation: 'PIM', category: 'penalties' },
  { name: 'Powerplay Goals', abbreviation: 'PP G', category: 'scoring' },
  { name: 'Powerplay Assists', abbreviation: 'PP A', category: 'scoring' },
  { name: 'Powerplay Points', abbreviation: 'PP Pts', category: 'scoring' },
  { name: 'Shorthanded Goals', abbreviation: 'SHG', category: 'scoring' },
  { name: 'Shorthanded Assists', abbreviation: 'SHA', category: 'scoring' },
  { name: 'Shorthanded Points', abbreviation: 'Sh Pts', category: 'scoring' },
  { name: 'Game-Winning Goals', abbreviation: 'GWG', category: 'scoring' },
  { name: 'Game-Tying Goals', abbreviation: 'GTG', category: 'scoring' },
  { name: 'Hits', abbreviation: 'Ht', category: 'skating' },
  { name: 'Faceoffs', abbreviation: 'F/O', category: 'skating' },
  { name: 'Faceoff Wins', abbreviation: 'F/O W', category: 'skating' },
  { name: 'Faceoff Losses', abbreviation: 'F/O L', category: 'skating' },
  { name: 'Faceoff Percentage', abbreviation: 'F/O %', category: 'skating' },
  { name: 'Credit For Game', abbreviation: 'Cr G', category: 'goaltending' },
  { name: 'Goals Against', abbreviation: 'GA', category: 'goaltending' },
  { name: 'Goals Against Average', abbreviation: 'GAA', category: 'goaltending' },
  { name: 'Losses', abbreviation: 'L', category: 'goaltending' },
  { name: 'Minutes Played', abbreviation: 'MIN', category: 'goaltending' },
  { name: 'Overtime Losses', abbreviation: 'OTL', category: 'goaltending' },
  { name: 'Overtime Wins', abbreviation: 'OTW', category: 'goaltending' },
  { name: 'Saves', abbreviation: 'Sv', category: 'goaltending' },
  { name: 'Shots Against', abbreviation: 'SA', category: 'goaltending' },
  { name: 'Shutouts', abbreviation: 'SO', category: 'goaltending' },
  { name: 'Save Percentage', abbreviation: 'Sv %', category: 'goaltending' },
];

export class PlayerStats {
  game: Game;
  playerId: number;
  scoring = {
    assists: {text: 'Assists', value: 0},
    hatTricks: {text: 'Hat Tricks', value: 0},
    gameTyingGoals: {text: 'Game-Tying Goals', value: 0},
    gameWinningGoals: {text: 'Game-Winning Goals', value: 0},
    shorthandedPoints: {text: 'Shorthanded Points', value: 0},
    powerplayPoints: {text: 'Powerplay Points', value: 0},
    points: {text: 'Points', value: 0},
    powerplayGoals: {text: 'Powerplay Goals', value: 0},
    powerplayAssists: {text: 'Powerplay Assists', value: 0},
    shorthandedGoals: {text: 'Shorthanded Goals', value: 0},
    shorthandedAssists: {text: 'Shorthanded Assists', value: 0},
    goals: {text: 'Goals', value: 0}
  };
  penalties = {
    penalties: {text: 'Penalties', value: 0},
    penaltyMinutes: {text: 'Penalty Minutes', value: 0}
  };
  skating? = {
    faceoffs: {text: 'Faceoffs', value: 0},
    faceoffLosses: {text: 'Faceoff Losses', value: 0},
    faceoffPercent: {text: 'Faceoff Percent', value: 0},
    faceoffWins: {text: 'Faceoff Wins', value: 0},
    hits: {text: 'Hits', value: 0},
    plusMinus: {text: 'Plus / Minus', value: 0},
    shots: {text: 'Shots', value: 0}
  };
  goaltending? = {
    gamesStarted: {text: 'Games Started', value: 0},
    wins: {text: 'Wins', value: 0},
    creditForGame: {text: 'Credit for Game', value: 0},
    goalsAgainst: {text: 'Goals Against', value: 0},
    goalsAgainstAverage: {text: 'Goals Against Average', value: 0},
    losses: {text: 'Losses', value: 0},
    minutesPlayed: {text: 'Minutes Played', value: 0},
    overtimeLosses: {text: 'Overtime Losses', value: 0},
    overtimeWins: {text: 'Overtime Wins', value: 0},
    saves: {text: 'Saves', value: 0},
    shotsAgainst: {text: 'Shots Against', value: 0},
    shutouts: {text: 'Shutouts', value: 0},
    savePercentage: {text: 'Save Percentage', value: 0}
  };

  constructor(game: Game, id: number) {
    this.game = game;
    this.playerId = id;
  }
}
