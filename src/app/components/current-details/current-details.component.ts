import { Component, Input, OnInit } from '@angular/core';
import { CurrentConditions } from 'src/app/models/Forecast.model';

@Component({
  selector: 'app-current-details',
  templateUrl: './current-details.component.html',
  styleUrls: ['./current-details.component.css'],
})
export class CurrentDetailsComponent implements OnInit {
  @Input() currentConditions: CurrentConditions | any;

  constructor() {}

  ngOnInit(): void {}
}
