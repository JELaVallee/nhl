import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MdIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { WindowRef } from '../services/window.ref';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  @Input() title: string;
  @Output() newTheme: EventEmitter<string> = new EventEmitter();

  constructor(private mdIconRegistry: MdIconRegistry, sanitizer: DomSanitizer, private windowRef: WindowRef) {
    mdIconRegistry.addSvgIcon('github-logo', sanitizer.bypassSecurityTrustResourceUrl('/assets/github-circle-white-transparent.svg'));
  }

  emitNewTheme(theme: string) {
    this.newTheme.emit(theme);
  }

  goToGitHub() {
    this.windowRef.nativeWindow.location = 'https://github.com/dweitz43/nhl';
  }

}
