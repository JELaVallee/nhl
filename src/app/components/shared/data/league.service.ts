import { Injectable } from '@angular/core';
import { League } from './data-types';

@Injectable()
export class LeagueService {

  league: League = new League();

  constructor() { }

  buildLeague() {
    this.league = new League();
    return this.league;
  }

}
