import { LeagueStandings } from './standings';
import { EasternConference, OldEasternConference, OldWesternConference, WesternConference } from './conference';

export class League {
  name: string = 'National Hockey League';
  standings: LeagueStandings;
  easternConference: EasternConference | OldEasternConference;
  westernConference: WesternConference | OldWesternConference;
}
