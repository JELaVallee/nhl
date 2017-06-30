import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  teamTheme: string = 'dallas-stars';

  constructor() {}

  setTheme(theme: string) {
    this.teamTheme = theme;
  }
}
