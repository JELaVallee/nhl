import { ConferenceStandings, WildCardStandings } from './standings';
import {
  AtlanticDivision, CentralDivision, MetropolitanDivision, OldAtlanticDivision, OldCentralDivision,
  OldNortheastDivision, OldNorthwestDivision, OldPacificDivision,
  OldSoutheastDivision, PacificDivision
} from './division';
import { Team } from './team';

export class Conference {
  name: string;
  standings: ConferenceStandings;
  wildCardStandings: WildCardStandings;
}

export class EasternConference extends Conference {
  name: string = 'Eastern';
  atlanticDivision: AtlanticDivision = new AtlanticDivision();
  metropolitanDivision: MetropolitanDivision = new MetropolitanDivision();
  get teams(): Team[] {
    return [...this.atlanticDivision.teams, ...this.metropolitanDivision.teams];
  }
}

export class OldEasternConference extends Conference {
  name: string = 'Eastern';
  atlanticDivision: OldAtlanticDivision = new OldAtlanticDivision();
  northeastDivision: OldNortheastDivision = new OldNortheastDivision();
  southeastDivision: OldSoutheastDivision = new OldSoutheastDivision();
  get teams(): Team[] {
    return [...this.atlanticDivision.teams, ...this.northeastDivision.teams, ...this.southeastDivision.teams];
  }
}

export class WesternConference extends Conference {
  name: string = 'Western';
  centralDivision: CentralDivision = new CentralDivision();
  pacificDivision: PacificDivision = new PacificDivision();
  get teams(): Team[] {
    return [...this.centralDivision.teams, ...this.pacificDivision.teams];
  }
}

export class OldWesternConference extends Conference {
  name: string = 'Western';
  centralDivision: OldCentralDivision = new OldCentralDivision();
  northwestDivision: OldNorthwestDivision = new OldNorthwestDivision();
  pacificDivision: OldPacificDivision = new OldPacificDivision();
  get teams(): Team[] {
    return [...this.centralDivision.teams, ...this.northwestDivision.teams, ...this.pacificDivision.teams];
  }
}
