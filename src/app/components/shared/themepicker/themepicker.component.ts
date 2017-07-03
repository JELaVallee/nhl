import { ChangeDetectionStrategy, Component, EventEmitter, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'theme-picker',
  templateUrl: 'themepicker.component.html',
  styleUrls: ['./themepicker.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  host: {'aria-hidden': 'true'},
})
export class ThemepickerComponent {
  currentTheme: string;
  @Output() newTheme: EventEmitter<string> = new EventEmitter();

  themes: string[] = [
    'nhl',
    'anaheim-ducks',
    'arizona-coyotes',
    'boston-bruins',
    'buffalo-sabres',
    'calgary-flames',
    'carolina-hurricanes',
    'chicago-blackhawks',
    'colorado-avalanche',
    'columbus-bluejackets',
    'dallas-stars',
    'detroit-redwings',
    'edmonton-oilers',
    'florida-panthers',
    'losangeles-kings',
    'minnesota-wild',
    'montreal-canadiens',
    'nashville-predators',
    'newjersey-devils',
    'newyork-islanders',
    'newyork-rangers',
    'ottawa-senators',
    'philadelphia-flyers',
    'pittsburgh-penguins',
    'sanjose-sharks',
    'stlouis-blues',
    'tampabay-lightning',
    'toronto-mapleleafs',
    'vancouver-canucks',
    'vegas-goldenknights',
    'washington-capitals',
    'winnipeg-jets'
  ];

  constructor() {}

  setTheme(theme: string) {
    this.currentTheme = theme;
    this.newTheme.emit(theme);
  }
}
