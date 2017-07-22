import { Game } from './';
import { DropdownOption } from '../services/page-header/page-header';

export class Stat implements DropdownOption {
  name: string;
  abbreviation: string;
  category: string;
  key: string;

  constructor(name: string, abbreviation: string, category: string, key?: string) {
    this.name = name;
    this.abbreviation = abbreviation;
    this.category = category;
    this.key = key;
  }
}

export const STAT_OPTIONS: Stat[] = [
  { name: 'Goals', abbreviation: 'G', category: 'scoring', key: 'goals' },
  { name: 'Assists', abbreviation: 'A', category: 'scoring', key: 'assists' },
  { name: 'Points', abbreviation: 'Pts', category: 'scoring', key: 'points' },
  { name: 'Hat Tricks', abbreviation: 'Hat', category: 'scoring', key: 'hatTricks' },
  { name: 'Plus / Minus', abbreviation: '+/-', category: 'skating', key: 'plusMinus' },
  { name: 'Shots', abbreviation: 'Sh', category: 'skating', key: 'shots' },
  { name: 'Penalties', abbreviation: 'Pn', category: 'penalties', key: 'penalties' },
  { name: 'Penalty Minutes', abbreviation: 'PIM', category: 'penalties', key: 'penaltyMinutes' },
  { name: 'Powerplay Goals', abbreviation: 'PP G', category: 'scoring', key: 'powerplayGoals' },
  { name: 'Powerplay Assists', abbreviation: 'PP A', category: 'scoring', key: 'powerplayAssists' },
  { name: 'Powerplay Points', abbreviation: 'PP Pts', category: 'scoring', key: 'powerplayPoints' },
  { name: 'Shorthanded Goals', abbreviation: 'SHG', category: 'scoring', key: 'shorthandedGoals' },
  { name: 'Shorthanded Assists', abbreviation: 'SHA', category: 'scoring', key: 'shorthandedAssists' },
  { name: 'Shorthanded Points', abbreviation: 'Sh Pts', category: 'scoring', key: 'shorthandedPoints' },
  { name: 'Game-Winning Goals', abbreviation: 'GWG', category: 'scoring', key: 'gameWinningGoals' },
  { name: 'Game-Tying Goals', abbreviation: 'GTG', category: 'scoring', key: 'gameTyingGoals' },
  { name: 'Hits', abbreviation: 'Ht', category: 'skating', key: 'hits' },
  { name: 'Faceoffs', abbreviation: 'F/O', category: 'skating', key: 'faceoffs' },
  { name: 'Faceoff Wins', abbreviation: 'F/O W', category: 'skating', key: 'faceoffWins' },
  { name: 'Faceoff Losses', abbreviation: 'F/O L', category: 'skating', key: 'faceoffLosses' },
  { name: 'Credit For Game', abbreviation: 'Cr G', category: 'goaltending', key: 'creditForGame' },
  { name: 'Goals Against', abbreviation: 'GA', category: 'goaltending', key: 'goalsAgainst' },
  { name: 'Goals Against Average', abbreviation: 'GAA', category: 'goaltending', key: 'goalsAgainstAverage' },
  { name: 'Losses', abbreviation: 'L', category: 'goaltending', key: 'losses' },
  { name: 'Minutes Played', abbreviation: 'MIN', category: 'goaltending', key: 'minutesPlayed' },
  { name: 'Overtime Losses', abbreviation: 'OTL', category: 'goaltending', key: 'overtimeLosses' },
  { name: 'Overtime Wins', abbreviation: 'OTW', category: 'goaltending', key: 'overtimeWins' },
  { name: 'Saves', abbreviation: 'Sv', category: 'goaltending', key: 'saves' },
  { name: 'Shots Against', abbreviation: 'SA', category: 'goaltending', key: 'shotsAgainst' },
  { name: 'Shutouts', abbreviation: 'SO', category: 'goaltending', key: 'shutouts' },
  { name: 'Save Percentage', abbreviation: 'Sv %', category: 'goaltending', key: 'savePercentage' },
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
