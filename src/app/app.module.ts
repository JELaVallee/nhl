import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, RequestOptions } from '@angular/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { AppRoutingModule } from './app.routing';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { ThemepickerComponent } from './components/shared/themepicker/themepicker.component';
import { WindowRef } from './components/shared/window.ref';
import { HistoryComponent } from './components/history/history.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { PageTitleService } from './components/shared/page-title/page-title';
import { FooterComponent } from './components/shared/footer/footer.component';
import { AppRequestOptions } from './components/shared/request-options';
import { DataService } from './components/shared/services/data.service';
import { LeagueService } from './components/shared/services/league.service';
import { SidenavComponent } from './components/shared/sidenav/sidenav.component';
import { TeamStatsDialogComponent } from './components/shared/team-stats-dialog/team-stats-dialog.component';
import { SeasonService } from './components/shared/services/season.service';

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
    MaterialModule,
    NgxChartsModule,
    AppRoutingModule
  ],
  providers: [
    { provide: RequestOptions, useClass: AppRequestOptions },
    WindowRef,
    PageTitleService,
    DataService,
    LeagueService,
    SeasonService
  ],
  entryComponents: [ TeamStatsDialogComponent ],
  bootstrap: [AppComponent]
})
export class AppModule { }
