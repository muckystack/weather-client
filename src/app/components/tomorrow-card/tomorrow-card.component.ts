import { Component, Input, OnInit } from '@angular/core';
import * as moment from 'moment';
import { Forecast } from 'src/app/models/Forecast.model';

@Component({
  selector: 'app-tomorrow-card',
  templateUrl: './tomorrow-card.component.html',
  styleUrls: ['./tomorrow-card.component.css'],
})
export class TomorrowCardComponent implements OnInit {
  @Input() data: Forecast | any;
  constructor() {}

  ngOnInit(): void {
    moment.locale('es');
    this.data.Date = moment(this.data.Date).format('ddd DD MMM').toString();
    // this.data.Date = this.data.Date.
  }
}
