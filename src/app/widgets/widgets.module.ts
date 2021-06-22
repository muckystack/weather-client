import { WeatherIconComponent } from './weather-icon/weather-icon.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchLocationComponent } from './search-location/search-location.component';
import { CurrentTempComponent } from './current-temp/current-temp.component';
import { SwitchTemperatureComponent } from './switch-temperature/switch-temperature.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    SearchLocationComponent,
    WeatherIconComponent,
    CurrentTempComponent,
    SwitchTemperatureComponent,
    FooterComponent,
  ],
  imports: [CommonModule],
  exports: [
    SearchLocationComponent,
    WeatherIconComponent,
    CurrentTempComponent,
    SwitchTemperatureComponent,
    FooterComponent,
  ],
})
export class WidgetsModule {}
