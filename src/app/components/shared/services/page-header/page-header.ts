import { Injectable } from '@angular/core';

export interface DropdownOption {
  name: string,
  abbreviation?: string
}

export const HOME_TITLE: string = 'Standings';
export const HISTORY_TITLE: string = 'History';

export const SEASON_OPTIONS: DropdownOption[] = [
  { name: '2017-2018' },
  { name: '2016-2017' },
  { name: '2015-2016' },
  { name: '2014-2015' },
  { name: '2013-2014' },
  { name: '2012-2013' },
  { name: '2011-2012' },
  { name: '2010-2011' },
  { name: '2009-2010' },
  { name: '2008-2009' },
  { name: '2007-2008' }
];
export const SEASON_PLACEHOLDER: string = 'Season';

export const STAT_OPTIONS: DropdownOption[] = [
  { name: 'Goals', abbreviation: 'G' },
  { name: 'Assists', abbreviation: 'A' },
  { name: 'Points', abbreviation: 'Pts' },
  { name: 'Hat Tricks', abbreviation: 'Hat' },
  { name: 'Plus / Minus', abbreviation: '+/-' },
  { name: 'Shots', abbreviation: 'Sh' },
  { name: 'Shot Percentage', abbreviation: 'Sh %' },
  { name: 'Penalties', abbreviation: 'Pn' },
  { name: 'Penalty Minutes', abbreviation: 'PIM' },
  { name: 'Powerplay Goals', abbreviation: 'PP G' },
  { name: 'Powerplay Assists', abbreviation: 'PP A' },
  { name: 'Powerplay Points', abbreviation: 'PP Pts' },
  { name: 'Shorthanded Goals', abbreviation: 'SHG' },
  { name: 'Shorthanded Assists', abbreviation: 'SHA' },
  { name: 'Shorthanded Points', abbreviation: 'Sh Pts' },
  { name: 'Game-Winning Goals', abbreviation: 'GWG' },
  { name: 'Game-Tying Goals', abbreviation: 'GTG' },
  { name: 'Hits', abbreviation: 'Ht' },
  { name: 'Faceoffs', abbreviation: 'F/O' },
  { name: 'Faceoff Wins', abbreviation: 'F/O W' },
  { name: 'Faceoff Losses', abbreviation: 'F/O L' },
  { name: 'Faceoff Percentage', abbreviation: 'F/O %' }
];
export const STAT_PLACEHOLDER: string = 'Statistic';

/**
 * Service responsible for setting the title that appears above the components and guide pages.
 */
@Injectable()
export class PageHeaderService {
  private _title = '';
  private dropdownVisible: boolean = true;
  private dropdownOptions: DropdownOption[] = [];
  private dropdownPlaceholder: string = 'Placeholder';

  get title(): string { return this._title; }
  set title(title: string) { this._title = title; }

  get dropdown(): boolean { return this.dropdownVisible; }
  set dropdown(value: boolean) { this.dropdownVisible = value; }

  get options(): DropdownOption[] { return this.dropdownOptions; }
  set options(value: DropdownOption[]) { this.dropdownOptions = value; }

  get placeholder(): string { return this.dropdownPlaceholder; }
  set placeholder(value: string) { this.dropdownPlaceholder = value; }
}
