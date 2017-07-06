import { ATLANTA_SEASONS } from '../services/season/season.service';
import { DivisionStandings } from './standings';
import { Team } from './team';

export class Division {
  name: string;
  standings: DivisionStandings;
}

export class AtlanticDivision extends Division {
  name: string = 'Atlantic';
  bostonBruins: Team = new Team('Boston', 'Bruins', 'BOS', {primary: '#ffb800', accent: '#2d2926', warn: '#ffffff'}, '../../../../assets/logos/bos-primary.png', '../../../../assets/logos/bos-accent.png', '../../../../assets/logos/bos-wordmark.gif', '../../../../assets/logos/bos-wordmark-accent.gif');
  buffaloSabres: Team = new Team('Buffalo', 'Sabres', 'BUF', {primary: '#001e43', accent: '#ffb800', warn: '#ffffff'}, '../../../../assets/logos/buf-primary.png', '../../../../assets/logos/buf-accent.png', '../../../../assets/logos/buf-wordmark.png', '../../../../assets/logos/buf-wordmark-accent.png');
  detroitRedWings: Team = new Team('Detroit', 'Red Wings', 'DET', {primary: '#cc092f', accent: '#ffffff', warn: '#000000'}, '../../../../assets/logos/det-primary.png', '../../../../assets/logos/det-accent.gif', '../../../../assets/logos/det-wordmark.gif');
  floridaPanthers: Team = new Team('Florida', 'Panthers', 'FLA', {primary: '#cc0b2d', accent: '#0d2145', warn: '#bc9561'}, '../../../../assets/logos/fla-primary.png', '../../../../assets/logos/fla-accent.png', '../../../../assets/logos/fla-wordmark-accent.png', '../../../../assets/logos/fla-wordmark-extra.png');
  montrealCanadiens: Team = new Team('Montreal', 'Canadiens', 'MTL', {primary: '#a8152b', accent: '#001c63', warn: '#ffffff'}, '../../../../assets/logos/mtl-primary.png', '../../../../assets/logos/mtl-primary.png', '../../../../assets/logos/mtl-wordmark.gif');
  ottawaSenators: Team = new Team('Ottawa', 'Senators', 'OTT', {primary: '#cb0729', accent: '#c89300', warn: '#2d2926'}, '../../../../assets/logos/ott-primary.png', '../../../../assets/logos/ott-accent.png', '../../../../assets/logos/ott-wordmark.gif', '../../../../assets/logos/ott-wordmark-accent.gif');
  tampaBayLightning: Team = new Team('Tampa Bay', 'Lightning', 'TBL', {primary: '#001f5d', accent: '#ffffff', warn: '#000000'}, '../../../../assets/logos/tbl-primary.png', '../../../../assets/logos/tbl-accent.png', '../../../../assets/logos/tbl-wordmark.gif');
  torontoMapleLeafs: Team = new Team('Toronto', 'Maple Leafs', 'TOR', {primary: '#002663', accent: '#ffffff', warn: '#000000'}, '../../../../assets/logos/tor-primary.png', '../../../../assets/logos/tor-accent.png', '../../../../assets/logos/tor-wordmark.png');

  get teams() {
    return [this.bostonBruins, this.buffaloSabres, this.detroitRedWings, this.floridaPanthers, this.montrealCanadiens, this.ottawaSenators, this.tampaBayLightning, this.torontoMapleLeafs];
  }
}

export class MetropolitanDivision extends Division {
  name: string = 'Metropolitan';
  carolinaHurricanes: Team = new Team('Carolina', 'Hurricanes', 'CAR', {primary: '#cb0a27', accent: '#2d2926', warn: '#ffffff'}, '../../../../assets/logos/car-primary.png', '../../../../assets/logos/car-accent.png', '../../../../assets/logos/car-wordmark.gif');
  columbusBlueJackets: Team = new Team('Columbus', 'Blue Jackets', 'CBJ', {primary: '#001d42', accent: '#cb0729', warn: '#ffffff'}, '../../../../assets/logos/cbj-primary.png', '../../../../assets/logos/cbj-accent.png', '../../../../assets/logos/cbj-wordmark.png', '../../../../assets/logos/cbj-wordmark-accent.gif');
  newJerseyDevils: Team = new Team('New Jersey', 'Devils', 'NJD', {primary: '#cb0729', accent: '#2e2a26', warn: '#ffffff'}, '../../../../assets/logos/njd-primary.png', '../../../../assets/logos/njd-primary.png', '../../../../assets/logos/njd-wordmark.gif');
  newYorkIslanders: Team = new Team('New York', 'Islanders', 'NYI', {primary: '#002e89', accent: '#ff4a00', warn: '#ffffff'}, '../../../../assets/logos/nyi-primary.png', '../../../../assets/logos/nyi-accent.png', '../../../../assets/logos/nyi-wordmark.gif');
  newYorkRangers: Team = new Team('New York', 'Rangers', 'NYR', {primary: '#0039a6', accent: '#cc092f', warn: '#ffffff'}, '../../../../assets/logos/nyr-primary.png', '../../../../assets/logos/nyr-accent.gif', '../../../../assets/logos/nyr-wordmark.gif', '../../../../assets/logos/nyr-wordmark-warn.gif');
  philadelphiaFlyers: Team = new Team('Philadelphia', 'Flyers', 'PHI', {primary: '#eb5328', accent: '#2d2926', warn: '#ffffff'}, '../../../../assets/logos/phi-primary.png', '../../../../assets/logos/phi-accent.png', '../../../../assets/logos/phi-wordmark.png');
  pittsburghPenguins: Team = new Team('Pittsburgh', 'Penguins', 'PIT', {primary: '#ffb70f', accent: '#2d2926', warn: '#ffffff'}, '../../../../assets/logos/pit-primary.png', '../../../../assets/logos/pit-accent.gif', '../../../../assets/logos/pit-wordmark.png');
  washingtonCapitals: Team = new Team('Washington', 'Capitals', 'WAS', {primary: '#ca0629', accent: '#001d43', warn: '#ffffff'}, '../../../../assets/logos/was-primary.png', '../../../../assets/logos/was-accent.png', '../../../../assets/logos/was-wordmark.gif');

  get teams() {
    return [this.carolinaHurricanes, this.columbusBlueJackets, this.newJerseyDevils, this.newYorkIslanders, this.newYorkRangers, this.philadelphiaFlyers, this.pittsburghPenguins, this.washingtonCapitals];
  }
}

export class CentralDivision extends Division {
  name: string = 'Central';
  chicagoBlackhawks: Team = new Team('Chicago', 'Blackhawks', 'CHI', {primary: '#cb0729', accent: '#2d2926', warn: '#cf8b00'}, '../../../../assets/logos/chi-primary.png', '../../../../assets/logos/chi-accent.png', '../../../../assets/logos/chi-wordmark.png');
  coloradoAvalanche: Team = new Team('Colorado', 'Avalanche', 'COL', {primary: '#71253d', accent: '#1a6093', warn: '#ffffff'}, '../../../../assets/logos/col-primary.png', '../../../../assets/logos/col-accent.png', '../../../../assets/logos/col-wordmark.gif', '../../../../assets/logos/col-wordmark-accent.gif');
  dallasStars: Team = new Team('Dallas', 'Stars', 'DAL', {primary: '#006340', accent: '#2d2925', warn: '#ffffff'}, '../../../../assets/logos/dal-primary.png', '../../../../assets/logos/dal-accent.png', '../../../../assets/logos/dal-wordmark.png', '../../../../assets/logos/dal-wordmark-accent.png');
  minnesotaWild: Team = new Team('Minnesota', 'Wild', 'MIN', {primary: '#134834', accent: '#a8152b', warn: '#decba2'}, '../../../../assets/logos/min-primary.png', '../../../../assets/logos/min-accent.png', '../../../../assets/logos/min-wordmark.gif');
  nashvillePredators: Team = new Team('Nashville', 'Predators', 'NSH', {primary: '#ffb800', accent: '#001d43', warn: '#ffffff'}, '../../../../assets/logos/nsh-primary.png', '../../../../assets/logos/nsh-accent.png', '../../../../assets/logos/nsh-wordmark.gif');
  stLouisBlues: Team = new Team('St. Louis', 'Blues', 'STL', {primary: '#002e88', accent: '#ffb800', warn: '#ffffff'}, '../../../../assets/logos/stl-primary.png', '../../../../assets/logos/stl-accent.png', '../../../../assets/logos/stl-wordmark.png');
  winnipegJets: Team = new Team('Winnipeg', 'Jets', 'WPG', {primary: '#001d43', accent: '#a9162b', warn: '#ffffff'}, '../../../../assets/logos/wpg-primary.png', '../../../../assets/logos/wpg-accent.png', '../../../../assets/logos/wpg-wordmark.gif', '../../../../assets/logos/wpg-wordmark-accent.gif');

  get teams() {
    return [this.chicagoBlackhawks, this.coloradoAvalanche, this.dallasStars, this.minnesotaWild, this.nashvillePredators, this.stLouisBlues, this.winnipegJets];
  }
}

export class PacificDivision extends Division {
  name: string = 'Pacific';
  anaheimDucks: Team = new Team('Anaheim', 'Ducks', 'ANA', {primary: '#fc5214', accent: '#8e754c', warn: '#ffffff'}, '../../../../assets/logos/ana-primary.gif', '../../../../assets/logos/ana-accent.gif', '../../../../assets/logos/ana-wordmark.gif', '../../../../assets/logos/ana-wordmark-accent.gif');
  arizonaCoyotes: Team = new Team('Arizona', 'Coyotes', 'ARI', {primary: '#872431', accent: '#decba2', warn: '#ffffff'}, '../../../../assets/logos/ari-primary.png', '../../../../assets/logos/ari-accent.png', '../../../../assets/logos/ari-wordmark.png');
  calgaryFlames: Team = new Team('Calgary', 'Flames', 'CGY', {primary: '#cb0729', accent: '#f4bf3e', warn: '#ffffff'}, '../../../../assets/logos/cgy-primary.png', '../../../../assets/logos/cgy-accent.png', '../../../../assets/logos/cgy-wordmark.png', '../../../../assets/logos/cgy-wordmark-accent.gif');
  edmontonOilers: Team = new Team('Edmonton', 'Oilers', 'EDM', {primary: '#fc4c02', accent: '#041e42', warn: '#ffffff'}, '../../../../assets/logos/edm-primary.png', '../../../../assets/logos/edm-accent.png', '../../../../assets/logos/edm-wordmark.png', '../../../../assets/logos/edm-wordmark-accent.png');
  losAngelesKings: Team = new Team('Los Angeles', 'Kings', 'LAK', {primary: '#2d2926', accent: '#a1aaad', warn: '#ffffff'}, '../../../../assets/logos/lak-primary.png', '../../../../assets/logos/lak-accent.png', '../../../../assets/logos/lak-wordmark.png', '../../../../assets/logos/lak-wordmark-accent.png');
  sanJoseSharks: Team = new Team('San Jose', 'Sharks', 'SJS', {primary: '#006273', accent: '#e87100', warn: '#ffffff'}, '../../../../assets/logos/sjs-primary.png', '../../../../assets/logos/sjs-accent.png', '../../../../assets/logos/sjs-wordmark.png', '../../../../assets/logos/sjs-wordmark-accent.png');
  vancouverCanucks: Team = new Team('Vancouver', 'Canucks', 'VAN', {primary: '#001f5c', accent: '#04824c', warn: '#ffffff'}, '../../../../assets/logos/van-primary.png', '../../../../assets/logos/van-accent.png', '../../../../assets/logos/van-wordmark.gif', '../../../../assets/logos/van-wordmark-accent.gif');
  vegasGoldenKnights: Team = new Team('Vegas', 'Golden Knights', 'VEG', {primary: '#8d744a', accent: '#36424a', warn: '#cc092f'}, '../../../../assets/logos/veg-primary.png', '../../../../assets/logos/veg-accent.png', '../../../../assets/logos/veg-wordmark.png', '../../../../assets/logos/veg-wordmark-accent.png');

  get teams() {
    return [this.anaheimDucks, this.arizonaCoyotes, this.calgaryFlames, this.edmontonOilers, this.losAngelesKings, this.sanJoseSharks, this.vancouverCanucks, this.vegasGoldenKnights];
  }
}

export class OldAtlanticDivision extends Division {
  name: string = 'Atlantic';
  newJerseyDevils: Team = new Team('New Jersey', 'Devils', 'NJD', {primary: '#cb0729', accent: '#2e2a26', warn: '#ffffff'}, '../../../../assets/logos/njd-primary.png', '../../../../assets/logos/njd-primary.png', '../../../../assets/logos/njd-wordmark.gif');
  newYorkIslanders: Team = new Team('New York', 'Islanders', 'NYI', {primary: '#002e89', accent: '#ff4a00', warn: '#ffffff'}, '../../../../assets/logos/nyi-primary-old.png', '../../../../assets/logos/nyi-accent.png', '../../../../assets/logos/nyi-wordmark.gif');
  newYorkRangers: Team = new Team('New York', 'Rangers', 'NYR', {primary: '#0039a6', accent: '#cc092f', warn: '#ffffff'}, '../../../../assets/logos/nyr-primary.png', '../../../../assets/logos/nyr-accent.gif', '../../../../assets/logos/nyr-wordmark.gif', '../../../../assets/logos/nyr-wordmark-warn.gif');
  philadelphiaFlyers: Team = new Team('Philadelphia', 'Flyers', 'PHI', {primary: '#eb5328', accent: '#2d2926', warn: '#ffffff'}, '../../../../assets/logos/phi-primary.png', '../../../../assets/logos/phi-accent.png', '../../../../assets/logos/phi-wordmark.png');
  pittsburghPenguins: Team = new Team('Pittsburgh', 'Penguins', 'PIT', {primary: '#ffb70f', accent: '#2d2926', warn: '#ffffff'}, '../../../../assets/logos/pit-primary-old.png', '../../../../assets/logos/pit-accent-old.gif', '../../../../assets/logos/pit-wordmark-old.gif');

  get teams() {
    return [this.newJerseyDevils, this.newYorkIslanders, this.newYorkRangers, this.philadelphiaFlyers, this.pittsburghPenguins];
  }
}

export class OldNortheastDivision extends Division {
  name: string = 'Northeast';
  bostonBruins: Team = new Team('Boston', 'Bruins', 'BOS', {primary: '#ffb800', accent: '#2d2926', warn: '#ffffff'}, '../../../../assets/logos/bos-primary.png', '../../../../assets/logos/bos-accent-old.png', '../../../../assets/logos/bos-wordmark.gif', '../../../../assets/logos/bos-wordmark-accent.gif');
  buffaloSabres: Team = new Team('Buffalo', 'Sabres', 'BUF', {primary: '#001e43', accent: '#ffb800', warn: '#ffffff'}, '../../../../assets/logos/buf-primary-old.png', '../../../../assets.logos/buf-accent.png', '../../../../assets/logos/buf-wordmark-old.png');
  montrealCanadiens: Team = new Team('Montreal', 'Canadiens', 'MTL', {primary: '#a8152b', accent: '#001c63', warn: '#ffffff'}, '../../../../assets/logos/mtl-primary.png', '../../../../assets/logos/mtl-primary.png', '../../../../assets/logos/mtl-wordmark.gif');
  ottawaSenators: Team = new Team('Ottawa', 'Senators', 'OTT', {primary: '#cb0729', accent: '#c89300', warn: '#2d2926'}, '../../../../assets/logos/ott-primary-old.png', '../../../../assets/logos/ott-accent.png', '../../../../assets/logos/ott-wordmark.gif', '../../../../assets/logos/ott-wordmark-accent.gif');
  torontoMapleLeafs: Team = new Team('Toronto', 'Maple Leafs', 'TOR', {primary: '#002663', accent: '#ffffff', warn: '#000000'}, '../../../../assets/logos/tor-primary-old.png', '../../../../assets/logos/tor-accent-old.png', '../../../../assets/logos/tor-wordmark-old.png');

  get teams() {
    return [this.bostonBruins, this.buffaloSabres, this.montrealCanadiens, this.ottawaSenators, this.torontoMapleLeafs];
  }
}

export class OldSoutheastDivision extends Division {
  name: string = 'Southeast';
  carolinaHurricanes: Team = new Team('Carolina', 'Hurricanes', 'CAR', {primary: '#cb0a27', accent: '#2d2926', warn: '#ffffff'}, '../../../../assets/logos/car-primary.png', '../../../../assets/logos/car-accent.png', '../../../../assets/logos/car-wordmark.gif');
  floridaPanthers: Team = new Team('Florida', 'Panthers', 'FLA', {primary: '#cc0b2d', accent: '#0d2145', warn: '#bc9561'}, '../../../../assets/logos/fla-primary-old.gif', '../../../../assets/logos/fla-accent-old.png', '../../../../fla-wordmark-old.png');
  tampaBayLightning: Team = new Team('Tampa Bay', 'Lightning', 'TBL', {primary: '#001f5d', accent: '#ffffff', warn: '#000000'}, '../../../../assets/logos/tbl-primary-old.gif', '../../../../assets/logos/tbl-accent-old.png', '../../../../assets/logos/tbl-wordmark-old.png');
  washingtonCapitals: Team = new Team('Washington', 'Capitals', 'WAS', {primary: '#ca0629', accent: '#001d43', warn: '#ffffff'}, '../../../../assets/logos/was-primary.png', '../../../../assets/logos/was-accent.png', '../../../../assets/logos/was-wordmark.gif');
  winnipegJets: Team = new Team('Winnipeg', 'Jets', 'WPG', {primary: '#001d43', accent: '#a9162b', warn: '#ffffff'}, '../../../../assets/logos/wpg-primary.png', '../../../../assets/logos/wpg-accent.png', '../../../../assets/logos/wpg-wordmark.gif', '../../../../assets/logos/wpg-wordmark-accent.gif');
  atlantaThrashers: Team = new Team('Atlanta', 'Thrashers', 'ATL', {primary: '#041e42', accent: '#b86125', warn: '#5c88da'}, '../../../../assets/logos/atl-primary.gif', '../../../../assets/logos/atl-accent.gif', '../../../../assets/logos/atl-wordmark.gif');

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
  chicagoBlackhawks: Team = new Team('Chicago', 'Blackhawks', 'CHI', {primary: '#cb0729', accent: '#2d2926', warn: '#cf8b00'}, '../../../../assets/logos/chi-primary.png', '../../../../assets/logos/chi-accent.png', '../../../../assets/logos/chi-wordmark.png');
  columbusBlueJackets: Team = new Team('Columbus', 'Blue Jackets', 'CBJ', {primary: '#001d42', accent: '#cb0729', warn: '#ffffff'}, '../../../../assets/logos/cbj-primary.png', '../../../../assets/logos/cbj-accent-old.png', '../../../../assets/logos/cbj-wordmark.png', '../../../../assets/logos/cbj-wordmark-accent.gif');
  detroitRedWings: Team = new Team('Detroit', 'Red Wings', 'DET', {primary: '#cc092f', accent: '#ffffff', warn: '#000000'}, '../../../../assets/logos/det-primary.png', '../../../../assets/logos/det-accent.gif', '../../../../assets/logos/det-wordmark.gif');
  nashvillePredators: Team = new Team('Nashville', 'Predators', 'NSH', {primary: '#ffb800', accent: '#001d43', warn: '#ffffff'}, '../../../../assets/logos/nsh-primary-old.png', '../../../../assets/logos/nsh-accent-old.png', '../../../../assets/logos/nsh-wordmark-old.gif');
  stLouisBlues: Team = new Team('St. Louis', 'Blues', 'STL', {primary: '#002e88', accent: '#ffb800', warn: '#ffffff'}, '../../../../assets/logos/stl-primary.png', '../../../../assets/logos/stl-accent.png', '../../../../assets/logos/stl-wordmark-old.png');

  get teams() {
    return [this.chicagoBlackhawks, this.columbusBlueJackets, this.detroitRedWings, this.nashvillePredators, this.stLouisBlues];
  }
}

export class OldNorthwestDivision extends Division {
  name: string = 'Northwest';
  calgaryFlames: Team = new Team('Calgary', 'Flames', 'CGY', {primary: '#cb0729', accent: '#f4bf3e', warn: '#ffffff'}, '../../../../assets/logos/cgy-primary.png', '../../../../assets/logos/cgy-accent.png', '../../../../assets/logos/cgy-wordmark.png', '../../../../assets/logos/cgy-wordmark-accent.gif');
  coloradoAvalanche: Team = new Team('Colorado', 'Avalanche', 'COL', {primary: '#71253d', accent: '#1a6093', warn: '#ffffff'}, '../../../../assets/logos/col-primary.png', '../../../../assets/logos/col-accent-old.png', '../../../../assets/logos/col-wordmark.gif', '../../../../assets/logos/col-wordmark-accent.gif');
  edmontonOilers: Team = new Team('Edmonton', 'Oilers', 'EDM', {primary: '#fc4c02', accent: '#041e42', warn: '#ffffff'}, '../../../../assets/logos/edm-primary-old.png', '../../../../assets/logos/edm-accent.png', '../../../../assets/logos/edm-wordmark-old.png');
  minnesotaWild: Team = new Team('Minnesota', 'Wild', 'MIN', {primary: '#134834', accent: '#a8152b', warn: '#decba2'}, '../../../../assets/logos/min-primary-old.png', '../../../../assets/logos/min-accent-old.png', '../../../../assets/logos/min-wordmark-old.png');
  vancouverCanucks: Team = new Team('Vancouver', 'Canucks', 'VAN', {primary: '#001f5c', accent: '#04824c', warn: '#ffffff'}, '../../../../assets/logos/van-primary.png', '../../../../assets/logos/van-accent-old.gif', '../../../../assets/logos/van-wordmark.gif', '../../../../assets/logos/van-wordmark-accent.gif');

  get teams() {
    return [this.calgaryFlames, this.coloradoAvalanche, this.edmontonOilers, this.minnesotaWild, this.vancouverCanucks];
  }
}

export class OldPacificDivision extends Division {
  name: string = 'Pacific';
  anaheimDucks: Team = new Team('Anaheim', 'Ducks', 'ANA', {primary: '#fc5214', accent: '#8e754c', warn: '#ffffff'}, '../../../../assets/logos/ana-primary-old.gif', '../../../../assets/logos/ana-accent-old.gif', '../../../../assets/logos/ana-wordmark.gif', '../../../../assets/logos/ana-wordmark-accent.gif');
  dallasStars: Team = new Team('Dallas', 'Stars', 'DAL', {primary: '#006340', accent: '#2d2925', warn: '#ffffff'}, '../../../../assets/logos/dal-primary-old.png', '../../../../assets/logos/dal-accent-old.png', '../../../../assets/logos/dal-wordmark-old.png');
  losAngelesKings: Team = new Team('Los Angeles', 'Kings', 'LAK', {primary: '#2d2926', accent: '#a1aaad', warn: '#ffffff'}, '../../../../assets/logos/lak-primary-old.png', '../../../../assets/logos/lak-accent-old.png', '../../../../assets/logos/lak-wordmark-old.png');
  phoenixCoyotes: Team = new Team('Phoenix', 'Coyotes', 'PHX', {primary: '#872431', accent: '#decba2', warn: '#ffffff'}, '../../../../assets/logos/phx-primary.png', '../../../../assets/logos/phx-accent.gif', '../../../../assets/logos/phx-wordmark.gif');
  sanJoseSharks: Team = new Team('San Jose', 'Sharks', 'SJS', {primary: '#006273', accent: '#e87100', warn: '#ffffff'}, '../../../../assets/logos/sjs-primary-old.png', '../../../../assets/logos/sjs-accent-old.gif', '../../../../assets/logos/sjs-wordmark-old.png');

  get teams() {
    return [this.anaheimDucks, this.dallasStars, this.losAngelesKings, this.phoenixCoyotes, this.sanJoseSharks];
  }
}
