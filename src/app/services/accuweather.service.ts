import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccuweatherService {

  constructor(private http:HttpClient) { }

  public getAutocompleteSearch(q:String):Observable<any>{

    return this.http.get(`${environment.currentEndPoind}locations/v1/cities/autocomplete?apikey=${environment.Apikey}&q=${q}`);

  }

}
