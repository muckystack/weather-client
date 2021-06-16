import { WeatherIconComponent } from './weather-icon/weather-icon.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchLocationComponent } from './search-location/search-location.component';

@NgModule({
  declarations: [SearchLocationComponent, WeatherIconComponent],
  imports: [CommonModule],
  exports: [SearchLocationComponent, WeatherIconComponent],
})
export class WidgetsModule {}
