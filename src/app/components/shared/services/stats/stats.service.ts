import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { SeasonService } from '../season/season.service';
import { DatePipe }  from '@angular/common';
import { PlayerGameLog, PlayerGameLogsResponse } from '../../data/response-interfaces';
import { PlayerStats, Game, Team, Stat, Season, Player } from '../../data';
import { SearchService } from '../search/search.service';

@Injectable()
export class StatsService {

  selectedStat$: Observable<Stat>;
  statsLoadedMap: Map<number, boolean> = new Map();
  private currentSelectedStat: Stat;
  private selectedStatSource: BehaviorSubject<Stat> = new BehaviorSubject(this.currentSelectedStat);
  private base: string = 'https://api.mysportsfeeds.com/v1.1/pull/nhl/';
  private format: string = '.json?';
  private selectedPlayers: Player[] = [];

  constructor(private http: Http, private seasonService: SeasonService, private searchService: SearchService) {
    this.selectedStat$ = new Observable(fn => this.selectedStatSource.subscribe(fn));
  }

  set stat(value: Stat) {
    this.currentSelectedStat = value;
    this.selectedStatSource.next(this.currentSelectedStat);
  }

  get stat(): Stat {
    return this.currentSelectedStat;
  }

  get loaded(): boolean {
    let loaded: boolean = true;
    this.statsLoadedMap.forEach(value => {
      if (!value) {
        loaded = value;
        return;
      }
    });
    return loaded;
  }

  getPlayerStats(players: Player[], min: Date, max: Date): Observable<PlayerStats[]>[] {
    if (min <= max) {
      let seasons: Season[] = this.seasonService.getApiDateRange(min, max);
      let observables: Observable<any>[] = [];
      let apiCall: Observable<any> = new Observable();
      let playerParam: string = '';
      players.forEach((player, index) => {
        playerParam += `${player.firstName}-${player.lastName}`;
        if (index < players.length - 1) {
          playerParam += ',';
        }
      });
      this.selectedPlayers = players;

      seasons.forEach(season => {
        let startParam: string = DatePipe.prototype.transform(season.start, 'yMMdd');
        let endParam: string = DatePipe.prototype.transform(season.end, 'yMMdd');
        apiCall = this.http.get(`${this.base}${season.name}/player_gamelogs${this.format}player=${playerParam}&date=from-${startParam}-to-${endParam}`, { headers: new Headers({Authorization: `Basic ${btoa('dweitz43:dallasStars43')}`})}).map((response: Response) => {
          if (response.json()) {
            return this.mapStats(response.json());
          }
        });
        observables.push(apiCall);
      });

      return observables;
    }
    return [];
  }

  private mapStats(response: PlayerGameLogsResponse): PlayerStats[] {
    let mappedStats: PlayerStats[] = [];
    const teams: Team[] = this.searchService.getTeams();

    if (response.playergamelogs.gamelogs) {
      response.playergamelogs.gamelogs.forEach((playerGameLog: PlayerGameLog) => {
        if (this.selectedPlayers.find(player => player.id === parseInt(playerGameLog.player.ID))) {
          let away: Team = teams.find(team => playerGameLog.game.awayTeam.Abbreviation === team.abbreviation);
          let home: Team = teams.find(team => playerGameLog.game.homeTeam.Abbreviation === team.abbreviation);
          let game: Game = new Game(parseInt(playerGameLog.game.id), playerGameLog.game.date, playerGameLog.game.time, away, home, playerGameLog.game.location);
          let playerStats: PlayerStats = new PlayerStats(game, parseInt(playerGameLog.player.ID));
          playerStats.scoring.goals.value = parseInt(playerGameLog.stats.Goals['#text']);
          playerStats.scoring.assists.value = parseInt(playerGameLog.stats.Assists['#text']);
          playerStats.scoring.gameTyingGoals.value = parseInt(playerGameLog.stats.GameTyingGoals['#text']);
          playerStats.scoring.gameWinningGoals.value = parseInt(playerGameLog.stats.GameWinningGoals['#text']);
          playerStats.scoring.hatTricks.value = parseInt(playerGameLog.stats.HatTricks['#text']);
          playerStats.scoring.points.value = parseInt(playerGameLog.stats.Points['#text']);
          playerStats.scoring.powerplayAssists.value = parseInt(playerGameLog.stats.PowerplayAssists['#text']);
          playerStats.scoring.powerplayGoals.value = parseInt(playerGameLog.stats.PowerplayGoals['#text']);
          playerStats.scoring.powerplayPoints.value = parseInt(playerGameLog.stats.PowerplayPoints['#text']);
          playerStats.scoring.shorthandedAssists.value = parseInt(playerGameLog.stats.ShorthandedAssists['#text']);
          playerStats.scoring.shorthandedGoals.value = parseInt(playerGameLog.stats.ShorthandedGoals['#text']);
          playerStats.scoring.shorthandedPoints.value = parseInt(playerGameLog.stats.ShorthandedPoints['#text']);
          playerStats.penalties.penalties.value = parseInt(playerGameLog.stats.Penalties['#text']);
          playerStats.penalties.penaltyMinutes.value = parseFloat(playerGameLog.stats.PenaltyMinutes['#text']);
          if(playerGameLog.player.Position === 'G') {
            playerStats.goaltending.creditForGame.value = parseInt(playerGameLog.stats.CreditForGame['#text']);
            playerStats.goaltending.goalsAgainst.value = parseInt(playerGameLog.stats.GoalsAgainst['#text']);
            playerStats.goaltending.goalsAgainstAverage.value = parseFloat(playerGameLog.stats.GoalsAgainstAverage['#text']);
            playerStats.goaltending.losses.value = parseInt(playerGameLog.stats.Losses['#text']);
            playerStats.goaltending.minutesPlayed.value = parseFloat(playerGameLog.stats.MinutesPlayed['#text']);
            playerStats.goaltending.overtimeLosses.value = parseInt(playerGameLog.stats.OvertimeLosses['#text']);
            playerStats.goaltending.overtimeWins.value = parseInt(playerGameLog.stats.OvertimeWins['#text']);
            playerStats.goaltending.savePercentage.value = parseFloat(playerGameLog.stats.SavePercentage['#text']);
            playerStats.goaltending.saves.value = parseInt(playerGameLog.stats.Saves['#text']);
            playerStats.goaltending.gamesStarted.value = parseInt(playerGameLog.stats.GamesStarted['#text']);
            playerStats.goaltending.shotsAgainst.value = parseInt(playerGameLog.stats.ShotsAgainst['#text']);
            playerStats.goaltending.shutouts.value = parseInt(playerGameLog.stats.Shutouts['#text']);
            playerStats.goaltending.wins.value = parseInt(playerGameLog.stats.Wins['#text']);
          } else {
            playerStats.skating.faceoffLosses.value = parseInt(playerGameLog.stats.FaceoffLosses['#text']);
            playerStats.skating.faceoffPercent.value = parseFloat(playerGameLog.stats.FaceoffPercent['#text']);
            playerStats.skating.faceoffs.value = parseInt(playerGameLog.stats.Faceoffs['#text']);
            playerStats.skating.faceoffWins.value = parseInt(playerGameLog.stats.FaceoffWins['#text']);
            playerStats.skating.hits.value = parseInt(playerGameLog.stats.Hits['#text']);
            playerStats.skating.plusMinus.value = parseInt(playerGameLog.stats.PlusMinus['#text']);
            playerStats.skating.shots.value = parseInt(playerGameLog.stats.Shots['#text']);
          }
          mappedStats.push(playerStats);
        }
      });
    }

    return mappedStats;
  }

}
