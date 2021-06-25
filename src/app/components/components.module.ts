import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsideComponent } from './aside/aside.component';
import { ForecastComponent } from './forecast/forecast.component';
import { WidgetsModule } from '../widgets/widgets.module';
import { TomorrowCardComponent } from './tomorrow-card/tomorrow-card.component';
import { TodayInfoComponent } from './today-info/today-info.component';
import { CurrentDetailsComponent } from './current-details/current-details.component';

@NgModule({
  declarations: [AsideComponent, ForecastComponent, TomorrowCardComponent, TodayInfoComponent, CurrentDetailsComponent],
  imports: [CommonModule, WidgetsModule],
  exports: [AsideComponent, ForecastComponent, TomorrowCardComponent, TodayInfoComponent, CurrentDetailsComponent],
})
export class ComponentsModule {}
