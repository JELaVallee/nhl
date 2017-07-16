import { Component, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';
import { MdSelectChange } from '@angular/material';
import {
  PageHeaderService, SEASON_OPTIONS, SEASON_PLACEHOLDER,
  STAT_PLACEHOLDER
} from '../services/page-header/page-header';
import { SeasonService } from '../services/season/season.service';
import { ThemeService } from '../services/theme.service';
import { StatsService } from '../services/stats/stats.service';
import { NgModel } from '@angular/forms';
import { STAT_OPTIONS } from '../data';

const SMALL_WIDTH_BREAKPOINT = 840;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @Output() toggleSidenav = new EventEmitter<void>();
  @ViewChild('startElement') startElement: ElementRef;
  @ViewChild('endElement') endElement: ElementRef;
  selectedOption: string;
  startDate: Date;
  endDate: Date;
  startMinError: boolean = false;
  startMaxError: boolean = false;
  endMinError: boolean = false;
  endMaxError: boolean = false;

  constructor(public pageHeaderService: PageHeaderService, public themeService: ThemeService, private seasonService: SeasonService, private statsService: StatsService) {}

  ngOnInit() {
    this.selectedOption = SEASON_OPTIONS[0].name;
  }

  selectOption(event: MdSelectChange) {
    switch (this.pageHeaderService.placeholder) {
      case SEASON_PLACEHOLDER:
        this.seasonService.season = event.value;
        break;
      case STAT_PLACEHOLDER:
        this.statsService.stat = STAT_OPTIONS.find(stat => stat.name === event.value);
        break;
    }
  }

  isScreenSmall(): boolean {
    return window.matchMedia(`(max-width: ${SMALL_WIDTH_BREAKPOINT}px)`).matches;
  }

  selectStartDate(date?: Date) {
    if (date) this.startDate = date;
    if (!this.startMinError && !this.startMaxError) this.pageHeaderService.startDate = this.startDate;
  }

  validateAndSelectStartDate(model: NgModel) {
    this.startMinError = model.hasError('mdDatepickerMin');
    this.startMaxError = model.hasError('mdDatepickerMax');
    this.startElement.nativeElement.blur();
    this.selectStartDate();
  }

  selectEndDate(date?: Date) {
    if (date) this.endDate = date;
    if (!this.endMinError && !this.endMaxError) this.pageHeaderService.endDate = this.endDate;
  }

  validateAndSelectEndDate(model: NgModel) {
    this.endMinError = model.hasError('mdDatepickerMin');
    this.endMaxError = model.hasError('mdDatepickerMax');
    this.endElement.nativeElement.blur();
    this.selectEndDate();
  }
}
