export default class PastDate extends Date {
  public year: number;

  public month?: number;

  public day?: number;

  constructor(year: number, month?: number, day?: number) {
    super(1970 + (year - 1800), month ? month - 1 : 0, day);
    this.year = year;
    this.month = month;
    this.day = day;
  }

  public format() {
    var result = `${this.year}`;
    result +=
      this.month != undefined ? ". " + `${this.month}`.padStart(2, "0") : "";
    result +=
      this.day != undefined ? ". " + `${this.day}`.padStart(2, "0") : "";
    return result;
  }
}
