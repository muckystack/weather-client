import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather-icon',
  templateUrl: './weather-icon.component.html',
  styleUrls: ['./weather-icon.component.css'],
})
export class WeatherIconComponent implements OnInit {
  @Input() img: String = 'Clear.png';
  @Input() style: String = 'width:40%;';
  @Input('mywidth') width: String = '150';
  public url: String | any;

  constructor() {}

  ngOnInit(): void {
    // this.url = `./assets/weather/Shower.png`;
    this.url = this.img;
  }
}
