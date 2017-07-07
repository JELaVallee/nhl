import { ATLANTA_SEASONS } from '../services/season/season.service';
import { DivisionStandings } from './standings';
import { Team } from './team';

export class Division {
  name: string;
  standings: DivisionStandings;
}

export class AtlanticDivision extends Division {
  name: string = 'Atlantic';
  bostonBruins: Team = new Team('Boston', 'Bruins', 'BOS', {primary: '#ffb800', accent: '#2d2926', warn: '#ffffff'}, 'https://s3.amazonaws.com/dweitz21/nhl/logos/bos-primary.png', 'https://s3.amazonaws.com/dweitz21/nhl/logos/bos-accent.png', 'https://s3.amazonaws.com/dweitz21/nhl/logos/bos-wordmark.gif', 'https://s3.amazonaws.com/dweitz21/nhl/logos/bos-wordmark-accent.gif');
  buffaloSabres: Team = new Team('Buffalo', 'Sabres', 'BUF', {primary: '#001e43', accent: '#ffb800', warn: '#ffffff'}, 'https://s3.amazonaws.com/dweitz21/nhl/logos/buf-primary.png', 'https://s3.amazonaws.com/dweitz21/nhl/logos/buf-accent.png', 'https://s3.amazonaws.com/dweitz21/nhl/logos/buf-wordmark.png', 'https://s3.amazonaws.com/dweitz21/nhl/logos/buf-wordmark-accent.png');
  detroitRedWings: Team = new Team('Detroit', 'Red Wings', 'DET', {primary: '#cc092f', accent: '#ffffff', warn: '#000000'}, 'https://s3.amazonaws.com/dweitz21/nhl/logos/det-primary.png', 'https://s3.amazonaws.com/dweitz21/nhl/logos/det-accent.gif', 'https://s3.amazonaws.com/dweitz21/nhl/logos/det-wordmark.gif');
  floridaPanthers: Team = new Team('Florida', 'Panthers', 'FLA', {primary: '#cc0b2d', accent: '#0d2145', warn: '#bc9561'}, 'https://s3.amazonaws.com/dweitz21/nhl/logos/fla-primary.png', 'https://s3.amazonaws.com/dweitz21/nhl/logos/fla-accent.png', 'https://s3.amazonaws.com/dweitz21/nhl/logos/fla-wordmark-accent.png', 'https://s3.amazonaws.com/dweitz21/nhl/logos/fla-wordmark-extra.png');
  montrealCanadiens: Team = new Team('Montreal', 'Canadiens', 'MTL', {primary: '#a8152b', accent: '#001c63', warn: '#ffffff'}, 'https://s3.amazonaws.com/dweitz21/nhl/logos/mtl-primary.png', 'https://s3.amazonaws.com/dweitz21/nhl/logos/mtl-primary.png', 'https://s3.amazonaws.com/dweitz21/nhl/logos/mtl-wordmark.gif');
  ottawaSenators: Team = new Team('Ottawa', 'Senators', 'OTT', {primary: '#cb0729', accent: '#c89300', warn: '#2d2926'}, 'https://s3.amazonaws.com/dweitz21/nhl/logos/ott-primary.png', 'https://s3.amazonaws.com/dweitz21/nhl/logos/ott-accent.png', 'https://s3.amazonaws.com/dweitz21/nhl/logos/ott-wordmark.gif', 'https://s3.amazonaws.com/dweitz21/nhl/logos/ott-wordmark-accent.gif');
  tampaBayLightning: Team = new Team('Tampa Bay', 'Lightning', 'TBL', {primary: '#001f5d', accent: '#ffffff', warn: '#000000'}, 'https://s3.amazonaws.com/dweitz21/nhl/logos/tbl-primary.png', 'https://s3.amazonaws.com/dweitz21/nhl/logos/tbl-accent.png', 'https://s3.amazonaws.com/dweitz21/nhl/logos/tbl-wordmark.gif');
  torontoMapleLeafs: Team = new Team('Toronto', 'Maple Leafs', 'TOR', {primary: '#002663', accent: '#ffffff', warn: '#000000'}, 'https://s3.amazonaws.com/dweitz21/nhl/logos/tor-primary.png', 'https://s3.amazonaws.com/dweitz21/nhl/logos/tor-accent.png', 'https://s3.amazonaws.com/dweitz21/nhl/logos/tor-wordmark.png');

  get teams() {
    return [this.bostonBruins, this.buffaloSabres, this.detroitRedWings, this.floridaPanthers, this.montrealCanadiens, this.ottawaSenators, this.tampaBayLightning, this.torontoMapleLeafs];
  }
}

export class MetropolitanDivision extends Division {
  name: string = 'Metropolitan';
  carolinaHurricanes: Team = new Team('Carolina', 'Hurricanes', 'CAR', {primary: '#cb0a27', accent: '#2d2926', warn: '#ffffff'}, 'https://s3.amazonaws.com/dweitz21/nhl/logos/car-primary.png', 'https://s3.amazonaws.com/dweitz21/nhl/logos/car-accent.png', 'https://s3.amazonaws.com/dweitz21/nhl/logos/car-wordmark.gif');
  columbusBlueJackets: Team = new Team('Columbus', 'Blue Jackets', 'CBJ', {primary: '#001d42', accent: '#cb0729', warn: '#ffffff'}, 'https://s3.amazonaws.com/dweitz21/nhl/logos/cbj-primary.png', 'https://s3.amazonaws.com/dweitz21/nhl/logos/cbj-accent.png', 'https://s3.amazonaws.com/dweitz21/nhl/logos/cbj-wordmark.png', 'https://s3.amazonaws.com/dweitz21/nhl/logos/cbj-wordmark-accent.gif');
  newJerseyDevils: Team = new Team('New Jersey', 'Devils', 'NJD', {primary: '#cb0729', accent: '#2e2a26', warn: '#ffffff'}, 'https://s3.amazonaws.com/dweitz21/nhl/logos/njd-primary.png', 'https://s3.amazonaws.com/dweitz21/nhl/logos/njd-primary.png', 'https://s3.amazonaws.com/dweitz21/nhl/logos/njd-wordmark.gif');
  newYorkIslanders: Team = new Team('New York', 'Islanders', 'NYI', {primary: '#002e89', accent: '#ff4a00', warn: '#ffffff'}, 'https://s3.amazonaws.com/dweitz21/nhl/logos/nyi-primary.png', 'https://s3.amazonaws.com/dweitz21/nhl/logos/nyi-accent.png', 'https://s3.amazonaws.com/dweitz21/nhl/logos/nyi-wordmark.gif');
  newYorkRangers: Team = new Team('New York', 'Rangers', 'NYR', {primary: '#0039a6', accent: '#cc092f', warn: '#ffffff'}, 'https://s3.amazonaws.com/dweitz21/nhl/logos/nyr-primary.png', 'https://s3.amazonaws.com/dweitz21/nhl/logos/nyr-accent.gif', 'https://s3.amazonaws.com/dweitz21/nhl/logos/nyr-wordmark.gif', 'https://s3.amazonaws.com/dweitz21/nhl/logos/nyr-wordmark-warn.gif');
  philadelphiaFlyers: Team = new Team('Philadelphia', 'Flyers', 'PHI', {primary: '#eb5328', accent: '#2d2926', warn: '#ffffff'}, 'https://s3.amazonaws.com/dweitz21/nhl/logos/phi-primary.png', 'https://s3.amazonaws.com/dweitz21/nhl/logos/phi-accent.png', 'https://s3.amazonaws.com/dweitz21/nhl/logos/phi-wordmark.png');
  pittsburghPenguins: Team = new Team('Pittsburgh', 'Penguins', 'PIT', {primary: '#ffb70f', accent: '#2d2926', warn: '#ffffff'}, 'https://s3.amazonaws.com/dweitz21/nhl/logos/pit-primary.png', 'https://s3.amazonaws.com/dweitz21/nhl/logos/pit-accent.gif', 'https://s3.amazonaws.com/dweitz21/nhl/logos/pit-wordmark.png');
  washingtonCapitals: Team = new Team('Washington', 'Capitals', 'WAS', {primary: '#ca0629', accent: '#001d43', warn: '#ffffff'}, 'https://s3.amazonaws.com/dweitz21/nhl/logos/was-primary.png', 'https://s3.amazonaws.com/dweitz21/nhl/logos/was-accent.png', 'https://s3.amazonaws.com/dweitz21/nhl/logos/was-wordmark.gif');

  get teams() {
    return [this.carolinaHurricanes, this.columbusBlueJackets, this.newJerseyDevils, this.newYorkIslanders, this.newYorkRangers, this.philadelphiaFlyers, this.pittsburghPenguins, this.washingtonCapitals];
  }
}

export class CentralDivision extends Division {
  name: string = 'Central';
  chicagoBlackhawks: Team = new Team('Chicago', 'Blackhawks', 'CHI', {primary: '#cb0729', accent: '#2d2926', warn: '#cf8b00'}, 'https://s3.amazonaws.com/dweitz21/nhl/logos/chi-primary.png', 'https://s3.amazonaws.com/dweitz21/nhl/logos/chi-accent.png', 'https://s3.amazonaws.com/dweitz21/nhl/logos/chi-wordmark.png');
  coloradoAvalanche: Team = new Team('Colorado', 'Avalanche', 'COL', {primary: '#71253d', accent: '#1a6093', warn: '#ffffff'}, 'https://s3.amazonaws.com/dweitz21/nhl/logos/col-primary.png', 'https://s3.amazonaws.com/dweitz21/nhl/logos/col-accent.png', 'https://s3.amazonaws.com/dweitz21/nhl/logos/col-wordmark.gif', 'https://s3.amazonaws.com/dweitz21/nhl/logos/col-wordmark-accent.gif');
  dallasStars: Team = new Team('Dallas', 'Stars', 'DAL', {primary: '#006340', accent: '#2d2925', warn: '#ffffff'}, 'https://s3.amazonaws.com/dweitz21/nhl/logos/dal-primary.png', 'https://s3.amazonaws.com/dweitz21/nhl/logos/dal-accent.png', 'https://s3.amazonaws.com/dweitz21/nhl/logos/dal-wordmark.png', 'https://s3.amazonaws.com/dweitz21/nhl/logos/dal-wordmark-accent.png');
  minnesotaWild: Team = new Team('Minnesota', 'Wild', 'MIN', {primary: '#134834', accent: '#a8152b', warn: '#decba2'}, 'https://s3.amazonaws.com/dweitz21/nhl/logos/min-primary.png', 'https://s3.amazonaws.com/dweitz21/nhl/logos/min-accent.png', 'https://s3.amazonaws.com/dweitz21/nhl/logos/min-wordmark.gif');
  nashvillePredators: Team = new Team('Nashville', 'Predators', 'NSH', {primary: '#ffb800', accent: '#001d43', warn: '#ffffff'}, 'https://s3.amazonaws.com/dweitz21/nhl/logos/nsh-primary.png', 'https://s3.amazonaws.com/dweitz21/nhl/logos/nsh-accent.png', 'https://s3.amazonaws.com/dweitz21/nhl/logos/nsh-wordmark.gif');
  stLouisBlues: Team = new Team('St. Louis', 'Blues', 'STL', {primary: '#002e88', accent: '#ffb800', warn: '#ffffff'}, 'https://s3.amazonaws.com/dweitz21/nhl/logos/stl-primary.png', 'https://s3.amazonaws.com/dweitz21/nhl/logos/stl-accent.png', 'https://s3.amazonaws.com/dweitz21/nhl/logos/stl-wordmark.png');
  winnipegJets: Team = new Team('Winnipeg', 'Jets', 'WPG', {primary: '#001d43', accent: '#a9162b', warn: '#ffffff'}, 'https://s3.amazonaws.com/dweitz21/nhl/logos/wpg-primary.png', 'https://s3.amazonaws.com/dweitz21/nhl/logos/wpg-accent.png', 'https://s3.amazonaws.com/dweitz21/nhl/logos/wpg-wordmark.gif', 'https://s3.amazonaws.com/dweitz21/nhl/logos/wpg-wordmark-accent.gif');

  get teams() {
    return [this.chicagoBlackhawks, this.coloradoAvalanche, this.dallasStars, this.minnesotaWild, this.nashvillePredators, this.stLouisBlues, this.winnipegJets];
  }
}

export class PacificDivision extends Division {
  name: string = 'Pacific';
  anaheimDucks: Team = new Team('Anaheim', 'Ducks', 'ANA', {primary: '#fc5214', accent: '#8e754c', warn: '#ffffff'}, 'https://s3.amazonaws.com/dweitz21/nhl/logos/ana-primary.gif', 'https://s3.amazonaws.com/dweitz21/nhl/logos/ana-accent.gif', 'https://s3.amazonaws.com/dweitz21/nhl/logos/ana-wordmark.gif', 'https://s3.amazonaws.com/dweitz21/nhl/logos/ana-wordmark-accent.gif');
  arizonaCoyotes: Team = new Team('Arizona', 'Coyotes', 'ARI', {primary: '#872431', accent: '#decba2', warn: '#ffffff'}, 'https://s3.amazonaws.com/dweitz21/nhl/logos/ari-primary.png', 'https://s3.amazonaws.com/dweitz21/nhl/logos/ari-accent.png', 'https://s3.amazonaws.com/dweitz21/nhl/logos/ari-wordmark.png');
  calgaryFlames: Team = new Team('Calgary', 'Flames', 'CGY', {primary: '#cb0729', accent: '#f4bf3e', warn: '#ffffff'}, 'https://s3.amazonaws.com/dweitz21/nhl/logos/cgy-primary.png', 'https://s3.amazonaws.com/dweitz21/nhl/logos/cgy-accent.png', 'https://s3.amazonaws.com/dweitz21/nhl/logos/cgy-wordmark.png', 'https://s3.amazonaws.com/dweitz21/nhl/logos/cgy-wordmark-accent.gif');
  edmontonOilers: Team = new Team('Edmonton', 'Oilers', 'EDM', {primary: '#fc4c02', accent: '#041e42', warn: '#ffffff'}, 'https://s3.amazonaws.com/dweitz21/nhl/logos/edm-primary.png', 'https://s3.amazonaws.com/dweitz21/nhl/logos/edm-accent.png', 'https://s3.amazonaws.com/dweitz21/nhl/logos/edm-wordmark.png', 'https://s3.amazonaws.com/dweitz21/nhl/logos/edm-wordmark-accent.png');
  losAngelesKings: Team = new Team('Los Angeles', 'Kings', 'LAK', {primary: '#2d2926', accent: '#a1aaad', warn: '#ffffff'}, 'https://s3.amazonaws.com/dweitz21/nhl/logos/lak-primary.png', 'https://s3.amazonaws.com/dweitz21/nhl/logos/lak-accent.png', 'https://s3.amazonaws.com/dweitz21/nhl/logos/lak-wordmark.png', 'https://s3.amazonaws.com/dweitz21/nhl/logos/lak-wordmark-accent.png');
  sanJoseSharks: Team = new Team('San Jose', 'Sharks', 'SJS', {primary: '#006273', accent: '#e87100', warn: '#ffffff'}, 'https://s3.amazonaws.com/dweitz21/nhl/logos/sjs-primary.png', 'https://s3.amazonaws.com/dweitz21/nhl/logos/sjs-accent.png', 'https://s3.amazonaws.com/dweitz21/nhl/logos/sjs-wordmark.png', 'https://s3.amazonaws.com/dweitz21/nhl/logos/sjs-wordmark-accent.png');
  vancouverCanucks: Team = new Team('Vancouver', 'Canucks', 'VAN', {primary: '#001f5c', accent: '#04824c', warn: '#ffffff'}, 'https://s3.amazonaws.com/dweitz21/nhl/logos/van-primary.png', 'https://s3.amazonaws.com/dweitz21/nhl/logos/van-accent.png', 'https://s3.amazonaws.com/dweitz21/nhl/logos/van-wordmark.gif', 'https://s3.amazonaws.com/dweitz21/nhl/logos/van-wordmark-accent.gif');
  vegasGoldenKnights: Team = new Team('Vegas', 'Golden Knights', 'VEG', {primary: '#8d744a', accent: '#36424a', warn: '#cc092f'}, 'https://s3.amazonaws.com/dweitz21/nhl/logos/veg-primary.png', 'https://s3.amazonaws.com/dweitz21/nhl/logos/veg-accent.png', 'https://s3.amazonaws.com/dweitz21/nhl/logos/veg-wordmark.png', 'https://s3.amazonaws.com/dweitz21/nhl/logos/veg-wordmark-accent.png');

  get teams() {
    return [this.anaheimDucks, this.arizonaCoyotes, this.calgaryFlames, this.edmontonOilers, this.losAngelesKings, this.sanJoseSharks, this.vancouverCanucks, this.vegasGoldenKnights];
  }
}

export class OldAtlanticDivision extends Division {
  name: string = 'Atlantic';
  newJerseyDevils: Team = new Team('New Jersey', 'Devils', 'NJD', {primary: '#cb0729', accent: '#2e2a26', warn: '#ffffff'}, 'https://s3.amazonaws.com/dweitz21/nhl/logos/njd-primary.png', 'https://s3.amazonaws.com/dweitz21/nhl/logos/njd-primary.png', 'https://s3.amazonaws.com/dweitz21/nhl/logos/njd-wordmark.gif');
  newYorkIslanders: Team = new Team('New York', 'Islanders', 'NYI', {primary: '#002e89', accent: '#ff4a00', warn: '#ffffff'}, 'https://s3.amazonaws.com/dweitz21/nhl/logos/nyi-primary-old.png', 'https://s3.amazonaws.com/dweitz21/nhl/logos/nyi-accent.png', 'https://s3.amazonaws.com/dweitz21/nhl/logos/nyi-wordmark.gif');
  newYorkRangers: Team = new Team('New York', 'Rangers', 'NYR', {primary: '#0039a6', accent: '#cc092f', warn: '#ffffff'}, 'https://s3.amazonaws.com/dweitz21/nhl/logos/nyr-primary.png', 'https://s3.amazonaws.com/dweitz21/nhl/logos/nyr-accent.gif', 'https://s3.amazonaws.com/dweitz21/nhl/logos/nyr-wordmark.gif', 'https://s3.amazonaws.com/dweitz21/nhl/logos/nyr-wordmark-warn.gif');
  philadelphiaFlyers: Team = new Team('Philadelphia', 'Flyers', 'PHI', {primary: '#eb5328', accent: '#2d2926', warn: '#ffffff'}, 'https://s3.amazonaws.com/dweitz21/nhl/logos/phi-primary.png', 'https://s3.amazonaws.com/dweitz21/nhl/logos/phi-accent.png', 'https://s3.amazonaws.com/dweitz21/nhl/logos/phi-wordmark.png');
  pittsburghPenguins: Team = new Team('Pittsburgh', 'Penguins', 'PIT', {primary: '#ffb70f', accent: '#2d2926', warn: '#ffffff'}, 'https://s3.amazonaws.com/dweitz21/nhl/logos/pit-primary-old.png', 'https://s3.amazonaws.com/dweitz21/nhl/logos/pit-accent-old.gif', 'https://s3.amazonaws.com/dweitz21/nhl/logos/pit-wordmark-old.gif');

  get teams() {
    return [this.newJerseyDevils, this.newYorkIslanders, this.newYorkRangers, this.philadelphiaFlyers, this.pittsburghPenguins];
  }
}

export class OldNortheastDivision extends Division {
  name: string = 'Northeast';
  bostonBruins: Team = new Team('Boston', 'Bruins', 'BOS', {primary: '#ffb800', accent: '#2d2926', warn: '#ffffff'}, 'https://s3.amazonaws.com/dweitz21/nhl/logos/bos-primary.png', 'https://s3.amazonaws.com/dweitz21/nhl/logos/bos-accent-old.png', 'https://s3.amazonaws.com/dweitz21/nhl/logos/bos-wordmark.gif', 'https://s3.amazonaws.com/dweitz21/nhl/logos/bos-wordmark-accent.gif');
  buffaloSabres: Team = new Team('Buffalo', 'Sabres', 'BUF', {primary: '#001e43', accent: '#ffb800', warn: '#ffffff'}, 'https://s3.amazonaws.com/dweitz21/nhl/logos/buf-primary-old.png', '../../../../assets.logos/buf-accent.png', 'https://s3.amazonaws.com/dweitz21/nhl/logos/buf-wordmark-old.png');
  montrealCanadiens: Team = new Team('Montreal', 'Canadiens', 'MTL', {primary: '#a8152b', accent: '#001c63', warn: '#ffffff'}, 'https://s3.amazonaws.com/dweitz21/nhl/logos/mtl-primary.png', 'https://s3.amazonaws.com/dweitz21/nhl/logos/mtl-primary.png', 'https://s3.amazonaws.com/dweitz21/nhl/logos/mtl-wordmark.gif');
  ottawaSenators: Team = new Team('Ottawa', 'Senators', 'OTT', {primary: '#cb0729', accent: '#c89300', warn: '#2d2926'}, 'https://s3.amazonaws.com/dweitz21/nhl/logos/ott-primary-old.png', 'https://s3.amazonaws.com/dweitz21/nhl/logos/ott-accent.png', 'https://s3.amazonaws.com/dweitz21/nhl/logos/ott-wordmark.gif', 'https://s3.amazonaws.com/dweitz21/nhl/logos/ott-wordmark-accent.gif');
  torontoMapleLeafs: Team = new Team('Toronto', 'Maple Leafs', 'TOR', {primary: '#002663', accent: '#ffffff', warn: '#000000'}, 'https://s3.amazonaws.com/dweitz21/nhl/logos/tor-primary-old.png', 'https://s3.amazonaws.com/dweitz21/nhl/logos/tor-accent-old.png', 'https://s3.amazonaws.com/dweitz21/nhl/logos/tor-wordmark-old.png');

  get teams() {
    return [this.bostonBruins, this.buffaloSabres, this.montrealCanadiens, this.ottawaSenators, this.torontoMapleLeafs];
  }
}

export class OldSoutheastDivision extends Division {
  name: string = 'Southeast';
  carolinaHurricanes: Team = new Team('Carolina', 'Hurricanes', 'CAR', {primary: '#cb0a27', accent: '#2d2926', warn: '#ffffff'}, 'https://s3.amazonaws.com/dweitz21/nhl/logos/car-primary.png', 'https://s3.amazonaws.com/dweitz21/nhl/logos/car-accent.png', 'https://s3.amazonaws.com/dweitz21/nhl/logos/car-wordmark.gif');
  floridaPanthers: Team = new Team('Florida', 'Panthers', 'FLA', {primary: '#cc0b2d', accent: '#0d2145', warn: '#bc9561'}, 'https://s3.amazonaws.com/dweitz21/nhl/logos/fla-primary-old.gif', 'https://s3.amazonaws.com/dweitz21/nhl/logos/fla-accent-old.png', '../../../../fla-wordmark-old.png');
  tampaBayLightning: Team = new Team('Tampa Bay', 'Lightning', 'TBL', {primary: '#001f5d', accent: '#ffffff', warn: '#000000'}, 'https://s3.amazonaws.com/dweitz21/nhl/logos/tbl-primary-old.gif', 'https://s3.amazonaws.com/dweitz21/nhl/logos/tbl-accent-old.png', 'https://s3.amazonaws.com/dweitz21/nhl/logos/tbl-wordmark-old.png');
  washingtonCapitals: Team = new Team('Washington', 'Capitals', 'WAS', {primary: '#ca0629', accent: '#001d43', warn: '#ffffff'}, 'https://s3.amazonaws.com/dweitz21/nhl/logos/was-primary.png', 'https://s3.amazonaws.com/dweitz21/nhl/logos/was-accent.png', 'https://s3.amazonaws.com/dweitz21/nhl/logos/was-wordmark.gif');
  winnipegJets: Team = new Team('Winnipeg', 'Jets', 'WPG', {primary: '#001d43', accent: '#a9162b', warn: '#ffffff'}, 'https://s3.amazonaws.com/dweitz21/nhl/logos/wpg-primary.png', 'https://s3.amazonaws.com/dweitz21/nhl/logos/wpg-accent.png', 'https://s3.amazonaws.com/dweitz21/nhl/logos/wpg-wordmark.gif', 'https://s3.amazonaws.com/dweitz21/nhl/logos/wpg-wordmark-accent.gif');
  atlantaThrashers: Team = new Team('Atlanta', 'Thrashers', 'ATL', {primary: '#041e42', accent: '#b86125', warn: '#5c88da'}, 'https://s3.amazonaws.com/dweitz21/nhl/logos/atl-primary.gif', 'https://s3.amazonaws.com/dweitz21/nhl/logos/atl-accent.gif', 'https://s3.amazonaws.com/dweitz21/nhl/logos/atl-wordmark.gif');

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
  chicagoBlackhawks: Team = new Team('Chicago', 'Blackhawks', 'CHI', {primary: '#cb0729', accent: '#2d2926', warn: '#cf8b00'}, 'https://s3.amazonaws.com/dweitz21/nhl/logos/chi-primary.png', 'https://s3.amazonaws.com/dweitz21/nhl/logos/chi-accent.png', 'https://s3.amazonaws.com/dweitz21/nhl/logos/chi-wordmark.png');
  columbusBlueJackets: Team = new Team('Columbus', 'Blue Jackets', 'CBJ', {primary: '#001d42', accent: '#cb0729', warn: '#ffffff'}, 'https://s3.amazonaws.com/dweitz21/nhl/logos/cbj-primary.png', 'https://s3.amazonaws.com/dweitz21/nhl/logos/cbj-accent-old.png', 'https://s3.amazonaws.com/dweitz21/nhl/logos/cbj-wordmark.png', 'https://s3.amazonaws.com/dweitz21/nhl/logos/cbj-wordmark-accent.gif');
  detroitRedWings: Team = new Team('Detroit', 'Red Wings', 'DET', {primary: '#cc092f', accent: '#ffffff', warn: '#000000'}, 'https://s3.amazonaws.com/dweitz21/nhl/logos/det-primary.png', 'https://s3.amazonaws.com/dweitz21/nhl/logos/det-accent.gif', 'https://s3.amazonaws.com/dweitz21/nhl/logos/det-wordmark.gif');
  nashvillePredators: Team = new Team('Nashville', 'Predators', 'NSH', {primary: '#ffb800', accent: '#001d43', warn: '#ffffff'}, 'https://s3.amazonaws.com/dweitz21/nhl/logos/nsh-primary-old.png', 'https://s3.amazonaws.com/dweitz21/nhl/logos/nsh-accent-old.png', 'https://s3.amazonaws.com/dweitz21/nhl/logos/nsh-wordmark-old.gif');
  stLouisBlues: Team = new Team('St. Louis', 'Blues', 'STL', {primary: '#002e88', accent: '#ffb800', warn: '#ffffff'}, 'https://s3.amazonaws.com/dweitz21/nhl/logos/stl-primary.png', 'https://s3.amazonaws.com/dweitz21/nhl/logos/stl-accent.png', 'https://s3.amazonaws.com/dweitz21/nhl/logos/stl-wordmark-old.png');

  get teams() {
    return [this.chicagoBlackhawks, this.columbusBlueJackets, this.detroitRedWings, this.nashvillePredators, this.stLouisBlues];
  }
}

export class OldNorthwestDivision extends Division {
  name: string = 'Northwest';
  calgaryFlames: Team = new Team('Calgary', 'Flames', 'CGY', {primary: '#cb0729', accent: '#f4bf3e', warn: '#ffffff'}, 'https://s3.amazonaws.com/dweitz21/nhl/logos/cgy-primary.png', 'https://s3.amazonaws.com/dweitz21/nhl/logos/cgy-accent.png', 'https://s3.amazonaws.com/dweitz21/nhl/logos/cgy-wordmark.png', 'https://s3.amazonaws.com/dweitz21/nhl/logos/cgy-wordmark-accent.gif');
  coloradoAvalanche: Team = new Team('Colorado', 'Avalanche', 'COL', {primary: '#71253d', accent: '#1a6093', warn: '#ffffff'}, 'https://s3.amazonaws.com/dweitz21/nhl/logos/col-primary.png', 'https://s3.amazonaws.com/dweitz21/nhl/logos/col-accent-old.png', 'https://s3.amazonaws.com/dweitz21/nhl/logos/col-wordmark.gif', 'https://s3.amazonaws.com/dweitz21/nhl/logos/col-wordmark-accent.gif');
  edmontonOilers: Team = new Team('Edmonton', 'Oilers', 'EDM', {primary: '#fc4c02', accent: '#041e42', warn: '#ffffff'}, 'https://s3.amazonaws.com/dweitz21/nhl/logos/edm-primary-old.png', 'https://s3.amazonaws.com/dweitz21/nhl/logos/edm-accent.png', 'https://s3.amazonaws.com/dweitz21/nhl/logos/edm-wordmark-old.png');
  minnesotaWild: Team = new Team('Minnesota', 'Wild', 'MIN', {primary: '#134834', accent: '#a8152b', warn: '#decba2'}, 'https://s3.amazonaws.com/dweitz21/nhl/logos/min-primary-old.png', 'https://s3.amazonaws.com/dweitz21/nhl/logos/min-accent-old.png', 'https://s3.amazonaws.com/dweitz21/nhl/logos/min-wordmark-old.png');
  vancouverCanucks: Team = new Team('Vancouver', 'Canucks', 'VAN', {primary: '#001f5c', accent: '#04824c', warn: '#ffffff'}, 'https://s3.amazonaws.com/dweitz21/nhl/logos/van-primary.png', 'https://s3.amazonaws.com/dweitz21/nhl/logos/van-accent-old.gif', 'https://s3.amazonaws.com/dweitz21/nhl/logos/van-wordmark.gif', 'https://s3.amazonaws.com/dweitz21/nhl/logos/van-wordmark-accent.gif');

  get teams() {
    return [this.calgaryFlames, this.coloradoAvalanche, this.edmontonOilers, this.minnesotaWild, this.vancouverCanucks];
  }
}

export class OldPacificDivision extends Division {
  name: string = 'Pacific';
  anaheimDucks: Team = new Team('Anaheim', 'Ducks', 'ANA', {primary: '#fc5214', accent: '#8e754c', warn: '#ffffff'}, 'https://s3.amazonaws.com/dweitz21/nhl/logos/ana-primary-old.gif', 'https://s3.amazonaws.com/dweitz21/nhl/logos/ana-accent-old.gif', 'https://s3.amazonaws.com/dweitz21/nhl/logos/ana-wordmark.gif', 'https://s3.amazonaws.com/dweitz21/nhl/logos/ana-wordmark-accent.gif');
  dallasStars: Team = new Team('Dallas', 'Stars', 'DAL', {primary: '#006340', accent: '#2d2925', warn: '#ffffff'}, 'https://s3.amazonaws.com/dweitz21/nhl/logos/dal-primary-old.png', 'https://s3.amazonaws.com/dweitz21/nhl/logos/dal-accent-old.png', 'https://s3.amazonaws.com/dweitz21/nhl/logos/dal-wordmark-old.png');
  losAngelesKings: Team = new Team('Los Angeles', 'Kings', 'LAK', {primary: '#2d2926', accent: '#a1aaad', warn: '#ffffff'}, 'https://s3.amazonaws.com/dweitz21/nhl/logos/lak-primary-old.png', 'https://s3.amazonaws.com/dweitz21/nhl/logos/lak-accent-old.png', 'https://s3.amazonaws.com/dweitz21/nhl/logos/lak-wordmark-old.png');
  phoenixCoyotes: Team = new Team('Phoenix', 'Coyotes', 'PHX', {primary: '#872431', accent: '#decba2', warn: '#ffffff'}, 'https://s3.amazonaws.com/dweitz21/nhl/logos/phx-primary.png', 'https://s3.amazonaws.com/dweitz21/nhl/logos/phx-accent.gif', 'https://s3.amazonaws.com/dweitz21/nhl/logos/phx-wordmark.gif');
  sanJoseSharks: Team = new Team('San Jose', 'Sharks', 'SJS', {primary: '#006273', accent: '#e87100', warn: '#ffffff'}, 'https://s3.amazonaws.com/dweitz21/nhl/logos/sjs-primary-old.png', 'https://s3.amazonaws.com/dweitz21/nhl/logos/sjs-accent-old.gif', 'https://s3.amazonaws.com/dweitz21/nhl/logos/sjs-wordmark-old.png');

  get teams() {
    return [this.anaheimDucks, this.dallasStars, this.losAngelesKings, this.phoenixCoyotes, this.sanJoseSharks];
  }
}
