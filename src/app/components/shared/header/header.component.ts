import { Component, EventEmitter, Output } from '@angular/core';
import { MdSelectChange } from '@angular/material';
import { PageTitleService } from '../page-title/page-title';
import { DataService } from '../data/data.service';

interface SeasonOption {
  type: string,
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
    { type: 'regular', name: '2017-2018'},
    { type: 'playoffs', name: '2017-2018'},
    { type: 'regular', name: '2016-2017'},
    { type: 'playoffs', name: '2016-2017'},
    { type: 'regular', name: '2015-2016'},
    { type: 'playoffs', name: '2015-2016'},
    { type: 'regular', name: '2014-2015'},
    { type: 'playoffs', name: '2014-2015'},
    { type: 'regular', name: '2013-2014'},
    { type: 'playoffs', name: '2013-2014'},
    { type: 'regular', name: '2012-2013'},
    { type: 'playoffs', name: '2012-2013'},
    { type: 'regular', name: '2011-2012'},
    { type: 'playoffs', name: '2011-2012'},
    { type: 'regular', name: '2010-2011'},
    { type: 'playoffs', name: '2010-2011'},
    { type: 'regular', name: '2009-2010'},
    { type: 'playoffs', name: '2009-2010'},
    { type: 'regular', name: '2008-2009'},
    { type: 'playoffs', name: '2008-2009'},
    { type: 'regular', name: '2007-2008'},
    { type: 'playoffs', name: '2007-2008'},
    { type: 'regular', name: '2006-2007'},
    { type: 'playoffs', name: '2006-2007'},
  ];
  selectedSeason: SeasonOption = this.seasons[0];

  constructor(private pageTitleService: PageTitleService, private dataService: DataService) { }

  getTitle() {
    return this.pageTitleService.title;
  }

  selectSeason(event: MdSelectChange) {
    this.dataService.selectedSeason = event.value;
  }

}
