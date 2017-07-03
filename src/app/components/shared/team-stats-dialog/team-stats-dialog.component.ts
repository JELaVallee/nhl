import { Component, Inject, OnInit } from '@angular/core';
import { MD_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-team-stats-dialog',
  templateUrl: './team-stats-dialog.component.html',
  styleUrls: ['./team-stats-dialog.component.scss']
})
export class TeamStatsDialogComponent implements OnInit {

  constructor(@Inject(MD_DIALOG_DATA) public data) { }

  ngOnInit() {
    console.log(this.data);
  }

}
