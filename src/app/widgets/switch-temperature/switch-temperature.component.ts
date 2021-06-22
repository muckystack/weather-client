import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-switch-temperature',
  templateUrl: './switch-temperature.component.html',
  styleUrls: ['./switch-temperature.component.css'],
})
export class SwitchTemperatureComponent implements OnInit {
  public btnActive: String | any = 'c';

  constructor(private renderer2: Renderer2) {}

  ngOnInit(): void {}

  switchTemperature(item: String) {
    this.btnActive = item;
  }
}
