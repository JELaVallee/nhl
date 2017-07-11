import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { AppRoutingModule } from './app.routing';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { ThemepickerComponent } from './components/shared/themepicker/themepicker.component';
import { WindowRef } from './components/shared/services/window.ref';
import { HistoryComponent } from './components/history/history.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { PageHeaderService } from './components/shared/services/page-header/page-header';
import { FooterComponent } from './components/shared/footer/footer.component';
import { StandingsService } from './components/shared/services/standings/standings.service';
import { LeagueService } from './components/shared/services/league/league.service';
import { SidenavComponent } from './components/shared/sidenav/sidenav.component';
import { TeamStatsDialogComponent } from './components/shared/team-stats-dialog/team-stats-dialog.component';
import { SeasonService } from './components/shared/services/season/season.service';
import { DocumentRef } from './components/shared/services/document.ref';
import { SearchService } from './components/shared/services/search/search.service';
import { ThemeService } from './components/shared/services/theme.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ThemepickerComponent,
    HistoryComponent,
    HeaderComponent,
    FooterComponent,
    SidenavComponent,
    TeamStatsDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    NgxChartsModule,
    AppRoutingModule
  ],
  providers: [
    WindowRef,
    DocumentRef,
    PageHeaderService,
    StandingsService,
    LeagueService,
    SeasonService,
    SearchService,
    ThemeService
  ],
  entryComponents: [ TeamStatsDialogComponent ],
  bootstrap: [AppComponent]
})
export class AppModule { }
