import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-current-temp',
  templateUrl: './current-temp.component.html',
  styleUrls: ['./current-temp.component.css'],
})
export class CurrentTempComponent implements OnInit {
  @Input() temperature = 0;
  @Input() isFahrenheit = false;

  constructor() {}

  ngOnInit(): void {}
}
