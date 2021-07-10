import { Component, Input, OnInit } from '@angular/core';
import { AccuweatherService } from 'src/app/services/accuweather.service';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css'],
})
export class ForecastComponent implements OnInit {
  forecast: any[] = [];

  constructor(private _accuweatherService: AccuweatherService) {}

  ngOnInit(): void {
    this._accuweatherService.showForecastEvent.subscribe((data) => {
      if (data) this.forecast = this._accuweatherService.forecast;
    });
  }
}
