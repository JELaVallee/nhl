import { Component, EventEmitter, Output } from '@angular/core';
import { PageTitleService } from "../page-title/page-title";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(public pageTitleService: PageTitleService) { }

  @Output() toggleSidenav = new EventEmitter<void>();

  getTitle() {
    return this.pageTitleService.title;
  }

}
