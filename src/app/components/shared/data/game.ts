import { Team } from './';

export class Game {
  id: number;
  date: Date;
  time: string;
  away: Team;
  home: Team;
  location: string;

  constructor(id: number, date: string, time: string, away: Team, home: Team, location: string) {
    this.id = id;
    this.away = away;
    this.home = home;
    this.location = location;
    this.time = time;
    this.date = new Date(date);
  }
}
