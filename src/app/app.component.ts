import {Component, Renderer2, ViewEncapsulation} from '@angular/core';
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
  teamTheme: string;

  constructor(private router: Router, private renderer: Renderer2) {}

  ngOnInit() {
    this.setTheme('dallas-stars');
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
    this.renderer.addClass(document.body, this.teamTheme);
  }
}
