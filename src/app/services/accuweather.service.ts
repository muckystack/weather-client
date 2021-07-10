import { environment } from './../../environments/environment';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Data } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AccuweatherService {
  @Output() showForecastEvent: EventEmitter<any> = new EventEmitter();
  forecast: any[] = [];

  constructor(private http: HttpClient) {}

  public getAutocompleteSearch(q: String): Observable<any> {
    return this.http.get(
      `${environment.currentEndPoind}locations/v1/cities/autocomplete?apikey=${environment.Apikey}&q=${q}`
    );
  }

  getIP() {
    this.http.get('http://api.ipify.org/?format=json').subscribe((response) => {
      console.log(response);
    });
  }

  getForecast$(id: String) {
    return this.http.get(
      `${environment.currentEndPoind}forecasts/v1/daily/5day/${id}?apikey=${environment.Apikey}&language=ES`
    );
  }
}
