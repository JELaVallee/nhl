import { Component, EventEmitter, Output } from '@angular/core';
import { MdSelectChange, MdIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { PageHeaderService, SEASON_PLACEHOLDER, STAT_PLACEHOLDER } from '../services/page-header/page-header';
import { SeasonService } from '../services/season/season.service';
import { ThemeService } from '../services/theme.service';

const SMALL_WIDTH_BREAKPOINT = 840;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @Output() toggleSidenav = new EventEmitter<void>();
  selectedOption: string;
  datepickerIcon: string;


  constructor(public pageHeaderService: PageHeaderService, public themeService: ThemeService, private seasonService: SeasonService, private mdIconRegistry: MdIconRegistry, private sanitizer: DomSanitizer) {
    mdIconRegistry.addSvgIcon('datepicker-toggle-light', sanitizer.bypassSecurityTrustResourceUrl('https://s3.amazonaws.com/dweitz21/nhl/datepicker-toggle-light.svg'));
    mdIconRegistry.addSvgIcon('datepicker-toggle-dark', sanitizer.bypassSecurityTrustResourceUrl('https://s3.amazonaws.com/dweitz21/nhl/datepicker-toggle-dark.svg'));
  }

  ngOnInit() {
    this.selectedOption = this.pageHeaderService.options[0] ? this.pageHeaderService.options[0].name : '';

    this.themeService.theme$.subscribe(theme => {
      switch (theme.type) {
        case 'light':
          this.datepickerIcon = 'datepicker-toggle-light';
          break;
        case 'dark':
          this.datepickerIcon = 'datepicker-toggle-dark';
          break;
      }
    });
  }

  selectOption(event: MdSelectChange) {
    switch (this.pageHeaderService.placeholder) {
      case SEASON_PLACEHOLDER:
        this.seasonService.season = event.value;
        break;
      case STAT_PLACEHOLDER:
        break;
    }
  }

  isScreenSmall(): boolean {
    return window.matchMedia(`(max-width: ${SMALL_WIDTH_BREAKPOINT}px)`).matches;
  }
}
