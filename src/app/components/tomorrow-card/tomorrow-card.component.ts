import { Component, Input, OnInit } from '@angular/core';
import { Forecast } from 'src/app/models/Forecast.model';

@Component({
  selector: 'app-tomorrow-card',
  templateUrl: './tomorrow-card.component.html',
  styleUrls: ['./tomorrow-card.component.css'],
})
export class TomorrowCardComponent implements OnInit {
  @Input() data: Forecast | any;
  @Input() isFahrenheit: boolean = false;
  constructor() {}

  ngOnInit(): void {
  }
}
