import { ConferenceStandings, WildCardStandings } from './standings';
import {
  AtlanticDivision, CentralDivision, MetropolitanDivision, OldAtlanticDivision, OldCentralDivision,
  OldNortheastDivision, OldNorthwestDivision, OldPacificDivision,
  OldSoutheastDivision, PacificDivision
} from './division';

export class Conference {
  name: string;
  standings: ConferenceStandings;
  wildCardStandings: WildCardStandings;
}

export class EasternConference extends Conference {
  name: string = 'Eastern';
  atlanticDivision: AtlanticDivision = new AtlanticDivision();
  metropolitanDivision: MetropolitanDivision = new MetropolitanDivision();
}

export class OldEasternConference extends Conference {
  name: string = 'Eastern';
  atlanticDivision: OldAtlanticDivision = new OldAtlanticDivision();
  northeastDivision: OldNortheastDivision = new OldNortheastDivision();
  southeastDivision: OldSoutheastDivision = new OldSoutheastDivision();
}

export class WesternConference extends Conference {
  name: string = 'Western';
  centralDivision: CentralDivision = new CentralDivision();
  pacificDivision: PacificDivision = new PacificDivision();
}

export class OldWesternConference extends Conference {
  name: string = 'Western';
  centralDivision: OldCentralDivision = new OldCentralDivision();
  northwestDivision: OldNorthwestDivision = new OldNorthwestDivision();
  pacificDivision: OldPacificDivision = new OldPacificDivision();
}
