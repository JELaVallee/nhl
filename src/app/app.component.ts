import { Component, Renderer2, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { DocumentRef } from './components/shared/services/document.ref';
import { Theme, ThemeService } from './components/shared/services/theme.service';

const SMALL_WIDTH_BREAKPOINT = 840;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {

  title: string = 'National Hockey League';
  teamTheme: Theme;

  constructor(private router: Router, private renderer: Renderer2, private documentRef: DocumentRef, private themeService: ThemeService) {}

  ngOnInit() {
    this.router.events.subscribe(() => {
      if (this.isScreenSmall()) {
        this.title = 'NHL';
      }
    });

    this.themeService.theme$.subscribe(theme => {
      this.setTheme(theme);
    });
  }

  isScreenSmall(): boolean {
    return window.matchMedia(`(max-width: ${SMALL_WIDTH_BREAKPOINT}px)`).matches;
  }

  setTheme(theme: Theme) {
    if (this.teamTheme) {
      this.renderer.removeClass(this.documentRef.nativeDocument.body, this.teamTheme.name);
    }
    this.teamTheme = theme;
    this.renderer.addClass(this.documentRef.nativeDocument.body, this.teamTheme.name);
  }
}
