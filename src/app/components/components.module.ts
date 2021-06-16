import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsideComponent } from './aside/aside.component';
import { ForecastComponent } from './forecast/forecast.component';
import { WidgetsModule } from '../widgets/widgets.module';
import { TomorrowCardComponent } from './tomorrow-card/tomorrow-card.component';

@NgModule({
  declarations: [AsideComponent, ForecastComponent, TomorrowCardComponent],
  imports: [CommonModule, WidgetsModule],
  exports: [AsideComponent, ForecastComponent, TomorrowCardComponent],
})
export class ComponentsModule {}
