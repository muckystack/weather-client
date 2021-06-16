import { WeatherIconComponent } from './weather-icon/weather-icon.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchLocationComponent } from './search-location/search-location.component';
import { CurrentTempComponent } from './current-temp/current-temp.component';

@NgModule({
  declarations: [SearchLocationComponent, WeatherIconComponent, CurrentTempComponent],
  imports: [CommonModule],
  exports: [SearchLocationComponent, WeatherIconComponent, CurrentTempComponent],
})
export class WidgetsModule {}
