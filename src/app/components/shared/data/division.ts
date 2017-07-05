import { ATLANTA_SEASONS } from '../services/season/season.service';
import { DivisionStandings } from './standings';
import { Team } from './team';

export class Division {
  name: string;
  standings: DivisionStandings;
}

export class AtlanticDivision extends Division {
  name: string = 'Atlantic';
  bostonBruins: Team = new Team('Boston', 'Bruins', 'BOS', '../../../../assets/logos/bos-primary.png', '../../../../assets/logos/bos-accent.png', '../../../../assets/logos/bos-wordmark.gif', '../../../../assets/logos/bos-wordmark-accent.gif');
  buffaloSabres: Team = new Team('Buffalo', 'Sabres', 'BUF', '../../../../assets/logos/buf-primary.png', '../../../../assets/logos/buf-accent.png', '../../../../assets/logos/buf-wordmark.png', '../../../../assets/logos/buf-wordmark-accent.png');
  detroitRedWings: Team = new Team('Detroit', 'Red Wings', 'DET', '../../../../assets/logos/det-primary.png', '../../../../assets/logos/det-accent.gif', '../../../../assets/logos/det-wordmark.gif');
  floridaPanthers: Team = new Team('Florida', 'Panthers', 'FLA', '../../../../assets/logos/fla-primary.png', '../../../../assets/logos/fla-accent.png', '../../../../assets/logos/fla-wordmark-accent.png', '../../../../assets/logos/fla-wordmark-extra.png');
  montrealCanadiens: Team = new Team('Montreal', 'Canadiens', 'MTL', '../../../../assets/logos/mtl-primary.png', '../../../../assets/logos/mtl-primary.png', '../../../../assets/logos/mtl-wordmark.gif');
  ottawaSenators: Team = new Team('Ottawa', 'Senators', 'OTT', '../../../../assets/logos/ott-primary.png', '../../../../assets/logos/ott-accent.png', '../../../../assets/logos/ott-wordmark.gif', '../../../../assets/logos/ott-wordmark-accent.gif');
  tampaBayLightning: Team = new Team('Tampa Bay', 'Lightning', 'TBL', '../../../../assets/logos/tbl-primary.png', '../../../../assets/logos/tbl-accent.png', '../../../../assets/logos/tbl-wordmark.gif');
  torontoMapleLeafs: Team = new Team('Toronto', 'Maple Leafs', 'TOR', '../../../../assets/logos/tor-primary.png', '../../../../assets/logos/tor-accent.png', '../../../../assets/logos/tor-wordmark.png');

  get teams() {
    return [this.bostonBruins, this.buffaloSabres, this.detroitRedWings, this.floridaPanthers, this.montrealCanadiens, this.ottawaSenators, this.tampaBayLightning, this.torontoMapleLeafs];
  }
}

export class MetropolitanDivision extends Division {
  name: string = 'Metropolitan';
  carolinaHurricanes: Team = new Team('Carolina', 'Hurricanes', 'CAR', '../../../../assets/logos/car-primary.png', '../../../../assets/logos/car-accent.png', '../../../../assets/logos/car-wordmark.gif');
  columbusBlueJackets: Team = new Team('Columbus', 'Blue Jackets', 'CBJ', '../../../../assets/logos/cbj-primary.png', '../../../../assets/logos/cbj-accent.png', '../../../../assets/logos/cbj-wordmark.png', '../../../../assets/logos/cbj-wordmark-accent.gif');
  newJerseyDevils: Team = new Team('New Jersey', 'Devils', 'NJD', '../../../../assets/logos/njd-primary.png', '../../../../assets/logos/njd-primary.png', '../../../../assets/logos/njd-wordmark.gif');
  newYorkIslanders: Team = new Team('New York', 'Islanders', 'NYI', '../../../../assets/logos/nyi-primary.png', '../../../../assets/logos/nyi-accent.png', '../../../../assets/logos/nyi-wordmark.gif');
  newYorkRangers: Team = new Team('New York', 'Rangers', 'NYR', '../../../../assets/logos/nyr-primary.png', '../../../../assets/logos/nyr-accent.gif', '../../../../assets/logos/nyr-wordmark.gif', '../../../../assets/logos/nyr-wordmark-warn.gif');
  philadelphiaFlyers: Team = new Team('Philadelphia', 'Flyers', 'PHI', '../../../../assets/logos/phi-primary.png', '../../../../assets/logos/phi-accent.png', '../../../../assets/logos/phi-wordmark.png');
  pittsburghPenguins: Team = new Team('Pittsburgh', 'Penguins', 'PIT', '../../../../assets/logos/pit-primary.png', '../../../../assets/logos/pit-accent.gif', '../../../../assets/logos/pit-wordmark.png');
  washingtonCapitals: Team = new Team('Washington', 'Capitals', 'WAS', '../../../../assets/logos/was-primary.png', '../../../../assets/logos/was-accent.png', '../../../../assets/logos/was-wordmark.gif');

  get teams() {
    return [this.carolinaHurricanes, this.columbusBlueJackets, this.newJerseyDevils, this.newYorkIslanders, this.newYorkRangers, this.philadelphiaFlyers, this.pittsburghPenguins, this.washingtonCapitals];
  }
}

export class CentralDivision extends Division {
  name: string = 'Central';
  chicagoBlackhawks: Team = new Team('Chicago', 'Blackhawks', 'CHI', '../../../../assets/logos/chi-primary.png', '../../../../assets/logos/chi-accent.png', '../../../../assets/logos/chi-wordmark.png');
  coloradoAvalanche: Team = new Team('Colorado', 'Avalanche', 'COL', '../../../../assets/logos/col-primary.png', '../../../../assets/logos/col-accent.png', '../../../../assets/logos/col-wordmark.gif', '../../../../assets/logos/col-wordmark-accent.gif');
  dallasStars: Team = new Team('Dallas', 'Stars', 'DAL', '../../../../assets/logos/dal-primary.png', '../../../../assets/logos/dal-accent.png', '../../../../assets/logos/dal-wordmark.png', '../../../../assets/logos/dal-wordmark-accent.png');
  minnesotaWild: Team = new Team('Minnesota', 'Wild', 'MIN', '../../../../assets/logos/min-primary.png', '../../../../assets/logos/min-accent.png', '../../../../assets/logos/min-wordmark.gif');
  nashvillePredators: Team = new Team('Nashville', 'Predators', 'NSH', '../../../../assets/logos/nsh-primary.png', '../../../../assets/logos/nsh-accent.png', '../../../../assets/logos/nsh-wordmark.gif');
  stLouisBlues: Team = new Team('St. Louis', 'Blues', 'STL', '../../../../assets/logos/stl-primary.png', '../../../../assets/logos/stl-accent.png', '../../../../assets/logos/stl-wordmark.png');
  winnipegJets: Team = new Team('Winnipeg', 'Jets', 'WPG', '../../../../assets/logos/wpg-primary.png', '../../../../assets/logos/wpg-accent.png', '../../../../assets/logos/wpg-wordmark.gif', '../../../../assets/logos/wpg-wordmark-accent.gif');

  get teams() {
    return [this.chicagoBlackhawks, this.coloradoAvalanche, this.dallasStars, this.minnesotaWild, this.nashvillePredators, this.stLouisBlues, this.winnipegJets];
  }
}

export class PacificDivision extends Division {
  name: string = 'Pacific';
  anaheimDucks: Team = new Team('Anaheim', 'Ducks', 'ANA', '../../../../assets/logos/ana-primary.gif', '../../../../assets/logos/ana-accent.gif', '../../../../assets/logos/ana-wordmark.gif', '../../../../assets/logos/ana-wordmark-accent.gif');
  arizonaCoyotes: Team = new Team('Arizona', 'Coyotes', 'ARI', '../../../../assets/logos/ari-primary.png', '../../../../assets/logos/ari-accent.png', '../../../../assets/logos/ari-wordmark.png');
  calgaryFlames: Team = new Team('Calgary', 'Flames', 'CGY', '../../../../assets/logos/cgy-primary.png', '../../../../assets/logos/cgy-accent.png', '../../../../assets/logos/cgy-wordmark.png', '../../../../assets/logos/cgy-wordmark-accent.gif');
  edmontonOilers: Team = new Team('Edmonton', 'Oilers', 'EDM', '../../../../assets/logos/edm-primary.png', '../../../../assets/logos/edm-accent.png', '../../../../assets/logos/edm-wordmark.png', '../../../../assets/logos/edm-wordmark-accent.png');
  losAngelesKings: Team = new Team('Los Angeles', 'Kings', 'LAK', '../../../../assets/logos/lak-primary.png', '../../../../assets/logos/lak-accent.png', '../../../../assets/logos/lak-wordmark.png', '../../../../assets/logos/lak-wordmark-accent.png');
  sanJoseSharks: Team = new Team('San Jose', 'Sharks', 'SJS', '../../../../assets/logos/sjs-primary.png', '../../../../assets/logos/sjs-accent.png', '../../../../assets/logos/sjs-wordmark.png', '../../../../assets/logos/sjs-wordmark-accent.png');
  vancouverCanucks: Team = new Team('Vancouver', 'Canucks', 'VAN', '../../../../assets/logos/van-primary.png', '../../../../assets/logos/van-accent.png', '../../../../assets/logos/van-wordmark.gif', '../../../../assets/logos/van-wordmark-accent.gif');
  vegasGoldenKnights: Team = new Team('Vegas', 'Golden Knights', 'VEG', '../../../../assets/logos/veg-primary.png', '../../../../assets/logos/veg-accent.png', '../../../../assets/logos/veg-wordmark.png', '../../../../assets/logos/veg-wordmark-accent.png');

  get teams() {
    return [this.anaheimDucks, this.arizonaCoyotes, this.calgaryFlames, this.edmontonOilers, this.losAngelesKings, this.sanJoseSharks, this.vancouverCanucks, this.vegasGoldenKnights];
  }
}

export class OldAtlanticDivision extends Division {
  name: string = 'Atlantic';
  newJerseyDevils: Team = new Team('New Jersey', 'Devils', 'NJD', '../../../../assets/logos/njd-primary.png', '../../../../assets/logos/njd-primary.png', '../../../../assets/logos/njd-wordmark.gif');
  newYorkIslanders: Team = new Team('New York', 'Islanders', 'NYI', '../../../../assets/logos/nyi-primary-old.png', '../../../../assets/logos/nyi-accent.png', '../../../../assets/logos/nyi-wordmark.gif');
  newYorkRangers: Team = new Team('New York', 'Rangers', 'NYR', '../../../../assets/logos/nyr-primary.png', '../../../../assets/logos/nyr-accent.gif', '../../../../assets/logos/nyr-wordmark.gif', '../../../../assets/logos/nyr-wordmark-warn.gif');
  philadelphiaFlyers: Team = new Team('Philadelphia', 'Flyers', 'PHI', '../../../../assets/logos/phi-primary.png', '../../../../assets/logos/phi-accent.png', '../../../../assets/logos/phi-wordmark.png');
  pittsburghPenguins: Team = new Team('Pittsburgh', 'Penguins', 'PIT', '../../../../assets/logos/pit-primary-old.png', '../../../../assets/logos/pit-accent-old.gif', '../../../../assets/logos/pit-wordmark-old.gif');

  get teams() {
    return [this.newJerseyDevils, this.newYorkIslanders, this.newYorkRangers, this.philadelphiaFlyers, this.pittsburghPenguins];
  }
}

export class OldNortheastDivision extends Division {
  name: string = 'Northeast';
  bostonBruins: Team = new Team('Boston', 'Bruins', 'BOS', '../../../../assets/logos/bos-primary.png', '../../../../assets/logos/bos-accent-old.png', '../../../../assets/logos/bos-wordmark.gif', '../../../../assets/logos/bos-wordmark-accent.gif');
  buffaloSabres: Team = new Team('Buffalo', 'Sabres', 'BUF', '../../../../assets/logos/buf-primary-old.png', '../../../../assets.logos/buf-accent.png', '../../../../assets/logos/buf-wordmark-old.png');
  montrealCanadiens: Team = new Team('Montreal', 'Canadiens', 'MTL', '../../../../assets/logos/mtl-primary.png', '../../../../assets/logos/mtl-primary.png', '../../../../assets/logos/mtl-wordmark.gif');
  ottawaSenators: Team = new Team('Ottawa', 'Senators', 'OTT', '../../../../assets/logos/ott-primary-old.png', '../../../../assets/logos/ott-accent.png', '../../../../assets/logos/ott-wordmark.gif', '../../../../assets/logos/ott-wordmark-accent.gif');
  torontoMapleLeafs: Team = new Team('Toronto', 'Maple Leafs', 'TOR', '../../../../assets/logos/tor-primary-old.png', '../../../../assets/logos/tor-accent-old.png', '../../../../assets/logos/tor-wordmark-old.png');

  get teams() {
    return [this.bostonBruins, this.buffaloSabres, this.montrealCanadiens, this.ottawaSenators, this.torontoMapleLeafs];
  }
}

export class OldSoutheastDivision extends Division {
  name: string = 'Southeast';
  carolinaHurricanes: Team = new Team('Carolina', 'Hurricanes', 'CAR', '../../../../assets/logos/car-primary.png', '../../../../assets/logos/car-accent.png', '../../../../assets/logos/car-wordmark.gif');
  floridaPanthers: Team = new Team('Florida', 'Panthers', 'FLA', '../../../../assets/logos/fla-primary-old.gif', '../../../../assets/logos/fla-accent-old.png', '../../../../fla-wordmark-old.png');
  tampaBayLightning: Team = new Team('Tampa Bay', 'Lightning', 'TBL', '../../../../assets/logos/tbl-primary-old.gif', '../../../../assets/logos/tbl-accent-old.png', '../../../../assets/logos/tbl-wordmark-old.png');
  washingtonCapitals: Team = new Team('Washington', 'Capitals', 'WAS', '../../../../assets/logos/was-primary.png', '../../../../assets/logos/was-accent.png', '../../../../assets/logos/was-wordmark.gif');
  winnipegJets: Team = new Team('Winnipeg', 'Jets', 'WPG', '../../../../assets/logos/wpg-primary.png', '../../../../assets/logos/wpg-accent.png', '../../../../assets/logos/wpg-wordmark.gif', '../../../../assets/logos/wpg-wordmark-accent.gif');
  atlantaThrashers: Team = new Team('Atlanta', 'Thrashers', 'ATL', '../../../../assets/logos/atl-primary.gif', '../../../../assets/logos/atl-accent.gif', '../../../../assets/logos/atl-wordmark.gif');

  season: string;

  get teams() {
    if (ATLANTA_SEASONS.includes(this.season)) {
      return [this.carolinaHurricanes, this.floridaPanthers, this.tampaBayLightning, this.washingtonCapitals, this.atlantaThrashers];
    }
    return [this.carolinaHurricanes, this.floridaPanthers, this.tampaBayLightning, this.washingtonCapitals, this.winnipegJets];
  }
}

export class OldCentralDivision extends Division {
  name: string = 'Central';
  chicagoBlackhawks: Team = new Team('Chicago', 'Blackhawks', 'CHI', '../../../../assets/logos/chi-primary.png', '../../../../assets/logos/chi-accent.png', '../../../../assets/logos/chi-wordmark.png');
  columbusBlueJackets: Team = new Team('Columbus', 'Blue Jackets', 'CBJ', '../../../../assets/logos/cbj-primary.png', '../../../../assets/logos/cbj-accent-old.png', '../../../../assets/logos/cbj-wordmark.png', '../../../../assets/logos/cbj-wordmark-accent.gif');
  detroitRedWings: Team = new Team('Detroit', 'Red Wings', 'DET', '../../../../assets/logos/det-primary.png', '../../../../assets/logos/det-accent.gif', '../../../../assets/logos/det-wordmark.gif');
  nashvillePredators: Team = new Team('Nashville', 'Predators', 'NSH', '../../../../assets/logos/nsh-primary-old.png', '../../../../assets/logos/nsh-accent-old.png', '../../../../assets/logos/nsh-wordmark-old.gif');
  stLouisBlues: Team = new Team('St. Louis', 'Blues', 'STL', '../../../../assets/logos/stl-primary.png', '../../../../assets/logos/stl-accent.png', '../../../../assets/logos/stl-wordmark-old.png');

  get teams() {
    return [this.chicagoBlackhawks, this.columbusBlueJackets, this.detroitRedWings, this.nashvillePredators, this.stLouisBlues];
  }
}

export class OldNorthwestDivision extends Division {
  name: string = 'Northwest';
  calgaryFlames: Team = new Team('Calgary', 'Flames', 'CGY', '../../../../assets/logos/cgy-primary.png', '../../../../assets/logos/cgy-accent.png', '../../../../assets/logos/cgy-wordmark.png', '../../../../assets/logos/cgy-wordmark-accent.gif');
  coloradoAvalanche: Team = new Team('Colorado', 'Avalanche', 'COL', '../../../../assets/logos/col-primary.png', '../../../../assets/logos/col-accent-old.png', '../../../../assets/logos/col-wordmark.gif', '../../../../assets/logos/col-wordmark-accent.gif');
  edmontonOilers: Team = new Team('Edmonton', 'Oilers', 'EDM', '../../../../assets/logos/edm-primary-old.png', '../../../../assets/logos/edm-accent.png', '../../../../assets/logos/edm-wordmark-old.png');
  minnesotaWild: Team = new Team('Minnesota', 'Wild', 'MIN', '../../../../assets/logos/min-primary-old.png', '../../../../assets/logos/min-accent-old.png', '../../../../assets/logos/min-wordmark-old.png');
  vancouverCanucks: Team = new Team('Vancouver', 'Canucks', 'VAN', '../../../../assets/logos/van-primary.png', '../../../../assets/logos/van-accent-old.gif', '../../../../assets/logos/van-wordmark.gif', '../../../../assets/logos/van-wordmark-accent.gif');

  get teams() {
    return [this.calgaryFlames, this.coloradoAvalanche, this.edmontonOilers, this.minnesotaWild, this.vancouverCanucks];
  }
}

export class OldPacificDivision extends Division {
  name: string = 'Pacific';
  anaheimDucks: Team = new Team('Anaheim', 'Ducks', 'ANA', '../../../../assets/logos/ana-primary-old.gif', '../../../../assets/logos/ana-accent-old.gif', '../../../../assets/logos/ana-wordmark.gif', '../../../../assets/logos/ana-wordmark-accent.gif');
  dallasStars: Team = new Team('Dallas', 'Stars', 'DAL', '../../../../assets/logos/dal-primary-old.png', '../../../../assets/logos/dal-accent-old.png', '../../../../assets/logos/dal-wordmark-old.png');
  losAngelesKings: Team = new Team('Los Angeles', 'Kings', 'LAK', '../../../../assets/logos/lak-primary-old.png', '../../../../assets/logos/lak-accent-old.png', '../../../../assets/logos/lak-wordmark-old.png');
  phoenixCoyotes: Team = new Team('Phoenix', 'Coyotes', 'PHX', '../../../../assets/logos/phx-primary.png', '../../../../assets/logos/phx-accent.gif', '../../../../assets/logos/phx-wordmark.gif');
  sanJoseSharks: Team = new Team('San Jose', 'Sharks', 'SJS', '../../../../assets/logos/sjs-primary-old.png', '../../../../assets/logos/sjs-accent-old.gif', '../../../../assets/logos/sjs-wordmark-old.png');

  get teams() {
    return [this.anaheimDucks, this.dallasStars, this.losAngelesKings, this.phoenixCoyotes, this.sanJoseSharks];
  }
}
