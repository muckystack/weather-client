import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { AccuweatherService } from 'src/app/services/accuweather.service';

@Component({
  selector: 'app-switch-temperature',
  templateUrl: './switch-temperature.component.html',
  styleUrls: ['./switch-temperature.component.css'],
})
export class SwitchTemperatureComponent implements OnInit {
  public btnActive: String | any = 'c';

  constructor(
    private _accuwatherService: AccuweatherService,
  ) {}

  ngOnInit(): void {}

  switchTemperature(item: String) {
    if(item == "c"){
      this._accuwatherService.isFahrenheit.emit(false);
    }else{
      this._accuwatherService.isFahrenheit.emit(true);
    }
    this.btnActive = item;
  }
}
