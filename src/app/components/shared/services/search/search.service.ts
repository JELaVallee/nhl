import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { ActivePlayersResponse } from '../../data/response-interfaces';
import { Observable } from 'rxjs/Observable';
import { Player, Team, WesternConference, EasternConference, OldSoutheastDivision, OldPacificDivision } from '../../data';

@Injectable()
export class SearchService {

  playersLoaded: boolean = false;
  private base: string = 'https://api.mysportsfeeds.com/v1.1/pull/nhl/';
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
    let oldSoutheast: OldSoutheastDivision = new OldSoutheastDivision();
    let oldPacific: OldPacificDivision = new OldPacificDivision();
    return [...east.teams, ...west.teams, oldSoutheast.atlantaThrashers, oldPacific.phoenixCoyotes];
  }

  private processActivePlayers(responseData: ActivePlayersResponse) : Player[] {
    let activePlayers: Player[] = [];
    responseData.activeplayers.playerentry.forEach(entry => {
      let player: Player = new Player(entry.player.LastName, entry.player.FirstName, parseInt(entry.player.JerseyNumber), entry.player.Position, entry.player.Height, entry.player.Weight, new Date(entry.player.BirthDate), parseInt(entry.player.Age), entry.player.BirthCity, entry.player.BirthCountry, entry.player.IsRookie === 'true', parseInt(entry.player.ID));
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
