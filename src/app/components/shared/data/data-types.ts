export interface StandingsTeamEntry {
  rank: number,
  team: Team
}

export class DivisionStandings {
  lastUpdated: Date;
  division: string;
  teams: StandingsTeamEntry[];
}

export class ConferenceStandings {
  lastUpdated: Date;
  conference: string;
  teams: StandingsTeamEntry[];
}

export class WildCardStandings {
  lastUpdated: Date;
  conference: string;
  teams: StandingsTeamEntry[];
}

export class LeagueStandings {
  lastUpdated: Date;
  teams: StandingsTeamEntry[];
}

export class Team {
  cssClass: string;
  city: string;
  name: string;
  abbreviation: string;
  logoUrl: string;
  alternateLogoUrl: string;
  wordmarkUrl: string;

  constructor(city: string, name: string, abbreviation: string, logoUrl?: string) {
    this.cssClass = `${city.toLowerCase().replace(/[\s.]/g, '')}-${name.toLowerCase().replace(/[\s.]/g, '')}`;
    this.city = city;
    this.name = name;
    this.abbreviation = abbreviation;
    this.logoUrl = logoUrl;
  }
}

export class Division {
  name: string;
  standings: DivisionStandings;
}

export class AtlanticDivision extends Division {
  name: string = 'Atlantic';
  bostonBruins: Team = new Team('Boston', 'Bruins', 'BOS', '../../../../assets/logos/bos-primary.png');
  buffaloSabres: Team = new Team('Buffalo', 'Sabres', 'BUF', '../../../../assets/logos/buf-primary.png');
  detroitRedWings: Team = new Team('Detroit', 'Red Wings', 'DET', '../../../../assets/logos/det-primary.png');
  floridaPanthers: Team = new Team('Florida', 'Panthers', 'FLA', '../../../../assets/logos/fla-primary.png');
  montrealCanadiens: Team = new Team('Montreal', 'Canadiens', 'MTL', '../../../../assets/logos/mtl-primary.png');
  ottawaSenators: Team = new Team('Ottawa', 'Senators', 'OTT', '../../../../assets/logos/ott-primary.png');
  tampaBayLightning: Team = new Team('Tampa Bay', 'Lightning', 'TBL', '../../../../assets/logos/tbl-primary.png');
  torontoMapleLeafs: Team = new Team('Toronto', 'Maple Leafs', 'TOR', '../../../../assets/logos/tor-primary.png');

  get teams() {
    return [this.bostonBruins, this.buffaloSabres, this.detroitRedWings, this.floridaPanthers, this.montrealCanadiens, this.ottawaSenators, this.tampaBayLightning, this.torontoMapleLeafs];
  }
}

export class MetropolitanDivision extends Division {
  name: string = 'Metropolitan';
  carolinaHurricanes: Team = new Team('Carolina', 'Hurricanes', 'CAR', '../../../../assets/logos/car-primary.png');
  columbusBlueJackets: Team = new Team('Columbus', 'Blue Jackets', 'CBJ', '../../../../assets/logos/cbj-primary.png');
  newJerseyDevils: Team = new Team('New Jersey', 'Devils', 'NJD', '../../../../assets/logos/njd-primary.png');
  newYorkIslanders: Team = new Team('New York', 'Islanders', 'NYI', '../../../../assets/logos/nyi-primary.png');
  newYorkRangers: Team = new Team('New York', 'Rangers', 'NYR', '../../../../assets/logos/nyr-primary.png');
  philadelphiaFlyers: Team = new Team('Philadelphia', 'Flyers', 'PHI', '../../../../assets/logos/phi-primary.png');
  pittsburghPenguins: Team = new Team('Pittsburgh', 'Penguins', 'PIT', '../../../../assets/logos/pit-primary.png');
  washingtonCapitals: Team = new Team('Washington', 'Capitals', 'WAS', '../../../../assets/logos/was-primary.png');

  get teams() {
    return [this.carolinaHurricanes, this.columbusBlueJackets, this.newJerseyDevils, this.newYorkIslanders, this.newYorkRangers, this.philadelphiaFlyers, this.pittsburghPenguins, this.washingtonCapitals];
  }
}

export class CentralDivision extends Division {
  name: string = 'Central';
  chicagoBlackhawks: Team = new Team('Chicago', 'Blackhawks', 'CHI', '../../../../assets/logos/chi-primary.png');
  coloradoAvalanche: Team = new Team('Colorado', 'Avalanche', 'COL', '../../../../assets/logos/col-primary.png');
  dallasStars: Team = new Team('Dallas', 'Stars', 'DAL', '../../../../assets/logos/dal-primary.png');
  minnesotaWild: Team = new Team('Minnesota', 'Wild', 'MIN', '../../../../assets/logos/min-primary.png');
  nashvillePredators: Team = new Team('Nashville', 'Predators', 'NSH', '../../../../assets/logos/nsh-primary.png');
  stLouisBlues: Team = new Team('St. Louis', 'Blues', 'STL', '../../../../assets/logos/stl-primary.png');
  winnipegJets: Team = new Team('Winnipeg', 'Jets', 'WPG', '../../../../assets/logos/wpg-primary.png');

  get teams() {
    return [this.chicagoBlackhawks, this.coloradoAvalanche, this.dallasStars, this.minnesotaWild, this.nashvillePredators, this.stLouisBlues, this.winnipegJets];
  }
}

export class PacificDivision extends Division {
  name: string = 'Pacific';
  anaheimDucks: Team = new Team('Anaheim', 'Ducks', 'ANA', '../../../../assets/logos/ana-primary.png');
  arizonaCoyotes: Team = new Team('Arizona', 'Coyotes', 'ARI', '../../../../assets/logos/ari-primary.png');
  calgaryFlames: Team = new Team('Calgary', 'Flames', 'CGY', '../../../../assets/logos/cgy-primary.png');
  edmontonOilers: Team = new Team('Edmonton', 'Oilers', 'EDM', '../../../../assets/logos/edm-primary.png');
  losAngelesKings: Team = new Team('Los Angeles', 'Kings', 'LAK', '../../../../assets/logos/lak-primary.png');
  sanJoseSharks: Team = new Team('San Jose', 'Sharks', 'SJS', '../../../../assets/logos/sjs-primary.png');
  vancouverCanucks: Team = new Team('Vancouver', 'Canucks', 'VAN', '../../../../assets/logos/van-primary.png');
  vegasGoldenKnights: Team = new Team('Vegas', 'Golden Knights', 'VEG', '../../../../assets/logos/veg-primary.png');

  get teams() {
    return [this.anaheimDucks, this.arizonaCoyotes, this.calgaryFlames, this.edmontonOilers, this.losAngelesKings, this.sanJoseSharks, this.vancouverCanucks, this.vegasGoldenKnights];
  }
}

export class Conference {
  name: string;
  standings: ConferenceStandings;
  wildCardStandings: WildCardStandings;
}

export class EasternConference extends Conference {
  name: string = 'Eastern';
  atlanticDivision: AtlanticDivision = new AtlanticDivision();
  metropolitalDivision: MetropolitanDivision = new MetropolitanDivision();
}

export class WesternConference extends Conference {
  name: string = 'Western';
  centralDivision: CentralDivision = new CentralDivision();
  pacificDivision: PacificDivision = new PacificDivision();
}

export class League {
  name: string = 'National Hockey League';
  standings: LeagueStandings;
  easternConference: EasternConference = new EasternConference();
  westernConference: WesternConference = new WesternConference();
}
