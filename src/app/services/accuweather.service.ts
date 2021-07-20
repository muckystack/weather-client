import { environment } from './../../environments/environment';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AccuweatherService {
  @Output() showForecastEvent: EventEmitter<any> = new EventEmitter();
  @Output() isFahrenheit: EventEmitter<boolean> = new EventEmitter();
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

  getCurrentConditions$(id: String) {
    return this.http.get(
      `${environment.currentEndPoind}currentconditions/v1/${id}?apikey=${environment.Apikey}&language=ES`
    );
  }

  getPosition(): Promise<any> {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        (resp) => {
          resolve({ lng: resp.coords.longitude, lat: resp.coords.latitude });
        },
        (err) => {
          reject(err);
        }
      );
    });
  }
}
