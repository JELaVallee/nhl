export class Team {
  cssClass: string;
  city: string;
  name: string;
  abbreviation: string;
  logoUrl: string;
  accentLogoUrl: string;
  wordmarkUrl: string;
  wordmarkAccentUrl: string;
  colors: { primary: string, accent: string, warn: string };

  constructor(city: string, name: string, abbreviation: string, colors?: {primary: string, accent: string, warn: string}, primaryLogoUrl?: string, accentLogoUrl?: string, wordmarkUrl?: string, wordmarkAccentUrl?: string) {
    this.cssClass = `${city.toLowerCase().replace(/[\s.]/g, '')}-${name.toLowerCase().replace(/[\s.]/g, '')}`;
    this.city = city;
    this.name = name;
    this.abbreviation = abbreviation;
    this.logoUrl = primaryLogoUrl;
    this.accentLogoUrl = accentLogoUrl;
    this.wordmarkUrl = wordmarkUrl;
    this.wordmarkAccentUrl = wordmarkAccentUrl;
    this.colors = colors;
  }
}
