import { Component, EventEmitter, Output } from '@angular/core';
import { MdSelectChange } from '@angular/material';
import { PageTitleService } from '../page-title/page-title';
import { DataService } from '../data/data.service';

interface SeasonOption {
  name: string
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @Output() toggleSidenav = new EventEmitter<void>();
  seasons: SeasonOption[] = [
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
  selectedSeason: string = this.seasons[0].name;

  constructor(private pageTitleService: PageTitleService, private dataService: DataService) { }

  getTitle() {
    return this.pageTitleService.title;
  }

  selectSeason(event: MdSelectChange) {
    this.dataService.selectedSeason = event.value;
  }

}
