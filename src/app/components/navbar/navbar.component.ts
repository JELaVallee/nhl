import { Component, EventEmitter, Output } from '@angular/core';
import { MdIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  @Output() newTheme: EventEmitter<string> = new EventEmitter();

  constructor(private mdIconRegistry: MdIconRegistry, sanitizer: DomSanitizer) {
    mdIconRegistry.addSvgIcon('github-logo', sanitizer.bypassSecurityTrustResourceUrl('/assets/github-circle-white-transparent.svg'));
  }

  emitNewTheme(theme: string) {
    this.newTheme.emit(theme);
  }

}
