export interface PeriodicElement {
  flow: string;
  type: string;
  book: string;
  container: string;
  iso: string;
  line: string;
  info: string;
  expiry: string;
  hold: string;
  trip: number;
  selected: boolean;
}

// select interface
export interface Sort {
  value: string;
  viewValue: string;
}
