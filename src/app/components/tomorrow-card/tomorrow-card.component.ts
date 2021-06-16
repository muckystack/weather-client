import { Component, Input, OnInit } from '@angular/core';
import { TomorrowData } from 'src/app/models/TomorrowData.model';

@Component({
  selector: 'app-tomorrow-card',
  templateUrl: './tomorrow-card.component.html',
  styleUrls: ['./tomorrow-card.component.css'],
})
export class TomorrowCardComponent implements OnInit {
  @Input() data: TomorrowData | any;

  constructor() {}

  ngOnInit(): void {}
}
