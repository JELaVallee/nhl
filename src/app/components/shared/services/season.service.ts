import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

export const ATLANTA_SEASONS: string[] = ['2007-2008', '2008-2009', '2009-2010', '2010-2011'];
export const OLD_LEAGUE_FORMAT: string[] = ['2007-2008', '2008-2009', '2009-2010', '2010-2011', '2011-2012', '2012-2013'];

@Injectable()
export class SeasonService {

  standingsSeason$: Observable<string>;
  private currentStandingsSeason: string = '2017-2018';
  private standingsSeasonSource: BehaviorSubject<string> = new BehaviorSubject<string>(this.currentStandingsSeason);

  constructor() {
    this.standingsSeason$ = new Observable(fn => this.standingsSeasonSource.subscribe(fn));
  }

  set season(value: string) {
    this.currentStandingsSeason = value;
    this.standingsSeasonSource.next(this.currentStandingsSeason);
  }

  get season(): string {
    return this.currentStandingsSeason;
  }

  oldLeagueFormat(): boolean {
    return OLD_LEAGUE_FORMAT.includes(this.season);
  }

  atlantaSeason(): boolean {
    return ATLANTA_SEASONS.includes(this.season);
  }

}
