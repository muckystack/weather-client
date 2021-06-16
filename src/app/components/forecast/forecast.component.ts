import { TomorrowData } from './../../models/TomorrowData.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css'],
})
export class ForecastComponent implements OnInit {
  public tomorrowDataArray: TomorrowData[] | any;

  constructor() {
    this.tomorrowDataArray = [
      new TomorrowData('Tomorrow', 'Shower.png', '16', '11'),
      new TomorrowData('Sun, 7 Jun', 'Shower.png', '16', '11'),
      new TomorrowData('Mon, 8 Jun', 'Shower.png', '16', '11'),
      new TomorrowData('Mon, 9 Jun', 'Sleet.png', '16', '11'),
      new TomorrowData('Mon, 10 Jun', 'Sleet.png', '16', '11'),
    ];
  }

  ngOnInit(): void {}
}
