import { Component, Input } from '@angular/core';
import { MdIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { WindowRef } from '../services/window.ref';
import { BaseRequestOptions, RequestOptions } from '@angular/http';
import { ThemeService } from '../services/theme.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  providers: [ { provide: RequestOptions, useClass: BaseRequestOptions } ]
})
export class NavbarComponent {

  @Input() title: string;
  githubIcon: string;

  constructor(private mdIconRegistry: MdIconRegistry, sanitizer: DomSanitizer, private windowRef: WindowRef, private themeService: ThemeService) {
    mdIconRegistry.addSvgIcon('github-logo-light', sanitizer.bypassSecurityTrustResourceUrl('https://s3.amazonaws.com/dweitz21/nhl/github-circle-white-transparent.svg'));
    mdIconRegistry.addSvgIcon('github-logo-dark', sanitizer.bypassSecurityTrustResourceUrl('https://s3.amazonaws.com/dweitz21/nhl/github-circle-black-transparent.svg'));
  }

  ngOnInit() {
    this.themeService.theme$.subscribe(theme => {
      switch (theme.type) {
        case 'light':
          this.githubIcon = 'github-logo-light';
          break;
        case 'dark':
          this.githubIcon = 'github-logo-dark';
          break;
      }
    });
  }

  goToGitHub() {
    this.windowRef.nativeWindow.location = 'https://github.com/dweitz43/nhl';
  }

}
