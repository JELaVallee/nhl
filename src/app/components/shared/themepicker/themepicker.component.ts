import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Theme, THEMES, ThemeService } from '../services/theme.service';

@Component({
  selector: 'theme-picker',
  templateUrl: 'themepicker.component.html',
  styleUrls: ['./themepicker.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  host: {'aria-hidden': 'true'},
})
export class ThemepickerComponent {
  themes: Theme[] = THEMES;

  constructor(private themeService: ThemeService) {}

  setTheme(theme: Theme) {
    this.themeService.theme = theme;
  }
}
