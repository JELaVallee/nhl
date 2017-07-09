import { Component, EventEmitter, Output } from '@angular/core';
import { MdSelectChange } from '@angular/material';
import { PageHeaderService, SEASON_PLACEHOLDER, STAT_PLACEHOLDER } from '../services/page-header/page-header';
import { SeasonService } from '../services/season/season.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @Output() toggleSidenav = new EventEmitter<void>();
  selectedOption: string;

  constructor(public pageHeaderService: PageHeaderService, private seasonService: SeasonService) { }

  ngOnInit() {
    this.selectedOption = this.pageHeaderService.options[0] ? this.pageHeaderService.options[0].name : '';
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
}
