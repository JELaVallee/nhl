import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

export interface DropdownOption {
  name: string,
  abbreviation?: string,
  category?: string
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

export const STAT_PLACEHOLDER: string = 'Statistic';

/**
 * Service responsible for setting the title that appears above the components and guide pages.
 */
@Injectable()
export class PageHeaderService {
  startDate$: Observable<Date>;
  endDate$: Observable<Date>;
  private _title = '';
  private dropdownVisible: boolean = true;
  private dropdownOptions: DropdownOption[] = [];
  private dropdownPlaceholder: string = 'Placeholder';
  private datepickerVisible: boolean = false;
  private datepickerStart: Date;
  private datepickerEnd: Date;
  private datepickerMin: Date = new Date(2007, 8, 1);
  private datepickerMax: Date = new Date();
  private startDateSource: BehaviorSubject<Date> = new BehaviorSubject(this.datepickerStart);
  private endDateSource: BehaviorSubject<Date> = new BehaviorSubject(this.datepickerEnd);

  constructor() {
    this.startDate$ = new Observable(fn => this.startDateSource.subscribe(fn));
    this.endDate$ = new Observable(fn => this.endDateSource.subscribe(fn));
  }

  get title(): string { return this._title; }
  set title(title: string) { this._title = title; }

  get dropdown(): boolean { return this.dropdownVisible; }
  set dropdown(value: boolean) { this.dropdownVisible = value; }

  get options(): DropdownOption[] { return this.dropdownOptions; }
  set options(value: DropdownOption[]) { this.dropdownOptions = value; }

  get placeholder(): string { return this.dropdownPlaceholder; }
  set placeholder(value: string) { this.dropdownPlaceholder = value; }

  get datepicker(): boolean { return this.datepickerVisible; }
  set datepicker(value: boolean) { this.datepickerVisible = value; }

  get startDate(): Date { return this.datepickerStart; }
  set startDate(value: Date) {
    this.datepickerStart = value;
    this.startDateSource.next(this.datepickerStart);
  }

  get endDate(): Date { return this.datepickerEnd; }
  set endDate(value: Date) {
    this.datepickerEnd = value;
    this.endDateSource.next(this.datepickerEnd);
  }

  get minDate(): Date { return this.datepickerMin; }
  set minDate(value: Date) { this.datepickerMin = value; }

  get maxDate(): Date { return this.datepickerMax; }
  set maxDate(value: Date) { this.datepickerMax = value; }
}
