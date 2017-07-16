import { Team } from './team';
import { PlayerStats } from './stats';

export class Player {
  lastName: string;
  firstName: string;
  fullName: string;
  jersey: number;
  position: string;
  height: string;
  weight: string;
  birthDate: Date;
  age: number;
  birthCity: string;
  birthCountry: string;
  rookie: boolean;
  id: number;
  team?: Team;
  stats?: PlayerStats[];

  constructor(last: string, first: string, jersey: number, position: string, height: string, weight: string, date: Date, age: number, city: string, country: string, rookie: boolean, id: number) {
    this.lastName = last;
    this.firstName = first;
    this.fullName = `${this.firstName} ${this.lastName}`;
    this.jersey = jersey;
    this.position = position;
    this.height = height;
    this.weight = weight;
    this.birthDate = date;
    this.age = age;
    this.birthCity = city;
    this.birthCountry = country;
    this.rookie = rookie;
    this.id = id;
  }
}
