import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-today-info',
  templateUrl: './today-info.component.html',
  styleUrls: ['./today-info.component.css']
})
export class TodayInfoComponent implements OnInit {
  @Input() isFahrenheit: boolean = false;
  @Input() currentConditions: any;

  constructor() { }

  ngOnInit(): void {
    console.log(this.currentConditions);
  }

}
