import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { ActivePlayersResponse } from '../../data/response-interfaces';
import { Observable } from 'rxjs/Observable';
import { Player } from '../../data/player';
import { EasternConference, WesternConference } from '../../data/conference';
import { Team } from '../../data/team';

@Injectable()
export class SearchService {

  playersLoaded: boolean = false;
  private base: string = 'https://www.mysportsfeeds.com/api/feed/pull/nhl/';
  private format: string = '.json?';

  constructor(private http: Http) { }

  getPlayers(season: string): Observable<Player[]> {
    let urlSearchParams: URLSearchParams = new URLSearchParams();
    urlSearchParams.set('sort', 'player.lastname.A');
    return this.http.get(`${this.base}${season}-regular/active_players${this.format}`, { params: urlSearchParams, headers: new Headers({Authorization: `Basic ${btoa('dweitz43:dallasStars43')}`}) })
      .map((response: Response) => {
        if (response.json()) {
          return this.processActivePlayers(response.json());
        }
      });
  }

  getTeams(): Team[] {
    let east: EasternConference = new EasternConference();
    let west: WesternConference = new WesternConference();
    return [...east.teams, ...west.teams];
  }

  private processActivePlayers(responseData: ActivePlayersResponse) : Player[] {
    let activePlayers: Player[] = [];
    responseData.activeplayers.playerentry.forEach(entry => {
      let player: Player = new Player(entry.player.LastName, entry.player.FirstName, parseInt(entry.player.JerseyNumber), entry.player.Position, entry.player.Height, entry.player.Weight, new Date(entry.player.BirthDate), parseInt(entry.player.Age), entry.player.BirthCity, entry.player.BirthCountry, entry.player.IsRookie === 'true')
      if (entry.team) {
        let east: EasternConference = new EasternConference();
        let west: WesternConference = new WesternConference();
        player.team = east.teams.find(team => team.abbreviation === entry.team.Abbreviation) || west.teams.find(team => team.abbreviation === entry.team.Abbreviation);
      }
      activePlayers.push(player);
    });
    return activePlayers;
  }

}
