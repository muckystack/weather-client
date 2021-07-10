export interface Forecast {
  Date: String;
  Icon: String;
  Minimum: number;
  Maximum: number;
}

export interface CurrentConditions {
  Date: String;
  Icon: String;
  Temperature: number;
  WeatherText: String;
  Place: String;
}
