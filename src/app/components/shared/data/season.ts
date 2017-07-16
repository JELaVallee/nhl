export class Season {
  name: string;
  start: Date;
  end: Date;

  constructor(name: string, start: Date, end: Date) {
    this.name = name;
    this.start = start;
    this.end = end;
  }
}
