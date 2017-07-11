import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

export class Theme {
  name: string;
  type: string;
}

export const THEMES: Theme[] = [
  {name:'nhl', type:'dark'},
  {name:'anaheim-ducks', type:'light'},
  {name:'arizona-coyotes', type:'light'},
  {name:'boston-bruins', type:'dark'},
  {name:'buffalo-sabres', type:'light'},
  {name:'calgary-flames', type:'light'},
  {name:'carolina-hurricanes', type:'light'},
  {name:'chicago-blackhawks', type:'light'},
  {name:'colorado-avalanche', type:'light'},
  {name:'columbus-bluejackets', type:'light'},
  {name:'dallas-stars', type:'light'},
  {name:'detroit-redwings', type:'light'},
  {name:'edmonton-oilers', type:'light'},
  {name:'florida-panthers', type:'light'},
  {name:'losangeles-kings', type:'light'},
  {name:'minnesota-wild', type:'light'},
  {name:'montreal-canadiens', type:'light'},
  {name:'nashville-predators', type:'dark'},
  {name:'newjersey-devils', type:'light'},
  {name:'newyork-islanders', type:'light'},
  {name:'newyork-rangers', type:'light'},
  {name:'ottawa-senators', type:'light'},
  {name:'philadelphia-flyers', type:'light'},
  {name:'pittsburgh-penguins', type:'dark'},
  {name:'sanjose-sharks', type:'light'},
  {name:'stlouis-blues', type:'light'},
  {name:'tampabay-lightning', type:'light'},
  {name:'toronto-mapleleafs', type:'light'},
  {name:'vancouver-canucks', type:'light'},
  {name:'vegas-goldenknights', type:'light'},
  {name:'washington-capitals', type:'light'},
  {name:'winnipeg-jets', type:'light'}
];

@Injectable()
export class ThemeService {

  theme$: Observable<Theme>;
  private currentTheme: Theme = THEMES[0];
  private themeSource: BehaviorSubject<Theme> = new BehaviorSubject(this.currentTheme);

  constructor() {
    this.theme$ = new Observable(fn => this.themeSource.subscribe(fn));
  }

  set theme(value: Theme) {
    this.currentTheme = value;
    this.themeSource.next(this.currentTheme);
  }

  get theme(): Theme {
    return this.currentTheme;
  }

}
