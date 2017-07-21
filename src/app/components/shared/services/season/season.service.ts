import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Season } from '../../data/season';

export const ATLANTA_SEASONS: string[] = ['2007-2008', '2008-2009', '2009-2010', '2010-2011'];
export const PHOENIX_SEASONS: string[] = ['2007-2008', '2008-2009', '2009-2010', '2010-2011', '2011-2012', '2012-2013', '2013-2014'];
export const OLD_LEAGUE_FORMAT: string[] = ['2007-2008', '2008-2009', '2009-2010', '2010-2011', '2011-2012', '2012-2013'];

export const SEASON_DATA: Season[] = [
  //{ name: '2017-2018-playoffs', start: new Date(2017, 3, 8), end: new Date() },
  { name: '2017-2018-regular', start: new Date(2017, 9, 4), end: new Date(2018, 3, 7) },
  { name: '2017-playoff', start: new Date(2017, 3, 12), end: new Date(2017, 5, 11) },
  { name: '2016-2017-regular', start: new Date(2016, 9, 12), end: new Date(2017, 3, 11) },
  { name: '2016-playoff', start: new Date(2016, 3, 3), end: new Date(2016, 5, 12) },
  { name: '2015-2016-regular', start: new Date(2015, 9, 7), end: new Date(2016, 3, 2) },
  { name: '2015-playoff', start: new Date(2015, 3, 15), end: new Date(2015, 5, 15) },
  { name: '2014-2015-regular', start: new Date(2014, 9, 8), end: new Date(2015, 3, 14) },
  { name: '2014-playoff', start: new Date(2014, 3, 16), end: new Date(2014, 5, 13) },
  { name: '2013-2014-regular', start: new Date(2013, 9, 1), end: new Date(2014, 3, 15) },
  { name: '2013-playoff', start: new Date(2013, 3, 30), end: new Date(2013, 5, 24) },
  { name: '2012-2013-regular', start: new Date(2013, 0, 19), end: new Date(2013, 3, 29) },
  { name: '2012-playoff', start: new Date(2012, 3, 11), end: new Date(2012, 5, 11) },
  { name: '2011-2012-regular', start: new Date(2011, 9, 6), end: new Date(2012, 3, 10) },
  { name: '2011-playoff', start: new Date(2011, 3, 13), end: new Date(2011, 5, 15) },
  { name: '2010-2011-regular', start: new Date(2010, 9, 7), end: new Date(2011, 3, 12) },
  { name: '2010-playoff', start: new Date(2010, 3, 14), end: new Date(2010, 5, 9) },
  { name: '2009-2010-regular', start: new Date(2009, 9, 1), end: new Date(2010, 3, 13) },
  { name: '2009-playoff', start: new Date(2009, 3, 15), end: new Date(2009, 5, 12) },
  { name: '2008-2009-regular', start: new Date(2008, 9, 4), end: new Date(2009, 3, 14) },
  { name: '2008-playoff', start: new Date(2008, 3, 9), end: new Date(2008, 5, 4) },
  { name: '2007-2008-regular', start: new Date(2007, 8, 29), end: new Date(2008, 3, 8) }
];

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

  phoenixSeason(): boolean {
    return PHOENIX_SEASONS.includes(this.season);
  }

  getApiDateRange(min: Date, max: Date): Season[] {
    let seasons: Season[] = [];
    let startInMin: boolean;
    let endInMax: boolean;
    let subset: boolean;

    SEASON_DATA.forEach((season: Season) => {
      let shortenedSeason;
      startInMin = min <= season.start && max >= season.start;
      endInMax = max >= season.end && min <= season.end;
      subset = min >= season.start && max <= season.end;

      if (startInMin && endInMax) {
        seasons.push(season);
      } else if (startInMin) {
        shortenedSeason = new Season(season.name, season.start, max);
      } else if (endInMax) {
        shortenedSeason = new Season(season.name, min, season.end);
      } else if (subset) {
        shortenedSeason = new Season(season.name, min, max);
      }

      if (shortenedSeason) seasons.push(shortenedSeason);
    });

    return seasons;
  }

}
