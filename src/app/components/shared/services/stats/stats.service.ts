import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class StatsService {

  selectedStat$: Observable<string>;
  private currentSelectedStats: string = '';
  private selectedStatSource: BehaviorSubject<string> = new BehaviorSubject(this.currentSelectedStats);

  constructor() {
    this.selectedStat$ = new Observable(fn => this.selectedStatSource.subscribe(fn));
  }

  set stat(value: string) {
    this.currentSelectedStats = value;
    this.selectedStatSource.next(this.currentSelectedStats);
  }

  get stat(): string {
    return this.currentSelectedStats;
  }

}
