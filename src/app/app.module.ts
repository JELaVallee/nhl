import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, RequestOptions } from '@angular/http';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { AppRoutingModule } from './app.routing';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { ThemepickerComponent } from './components/themepicker/themepicker.component';
import { WindowRef } from './components/shared/window.ref';
import { HistoryComponent } from './components/history/history.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { PageTitleService } from './components/shared/page-title/page-title';
import { FooterComponent } from './components/shared/footer/footer.component';
import { AppRequestOptions } from './components/shared/request-options';
import { DataService } from './components/shared/data/data.service';
import { LeagueService } from './components/shared/data/league.service';
import { SidenavComponent } from './components/shared/sidenav/sidenav.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ThemepickerComponent,
    HistoryComponent,
    HeaderComponent,
    FooterComponent,
    SidenavComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    CommonModule,
    MaterialModule,
    NgxChartsModule,
    AppRoutingModule
  ],
  providers: [
    { provide: RequestOptions, useClass: AppRequestOptions },
    WindowRef,
    PageTitleService,
    DataService,
    LeagueService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
