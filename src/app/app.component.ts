import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

const SMALL_WIDTH_BREAKPOINT = 840;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {

  title: string = 'National Hockey League';
  teamTheme: string = 'dallas-stars';

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe(() => {
      if (this.isScreenSmall()) {
        this.title = 'NHL';
      }
    });
  }

  isScreenSmall(): boolean {
    return window.matchMedia(`(max-width: ${SMALL_WIDTH_BREAKPOINT}px)`).matches;
  }

  setTheme(theme: string) {
    this.teamTheme = theme;
  }
}
