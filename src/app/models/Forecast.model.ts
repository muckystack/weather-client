export interface Forecast {
  Date: String;
  Icon: String;
  Minimum: number;
  Maximum: number;
  minCelsius: number;
  maxCelsius: number;
}

export interface CurrentConditions {
  Date: String;
  Icon: String;
  Temperature: number;
  celsius: number;
  WeatherText: String;
  Place: String;
}
