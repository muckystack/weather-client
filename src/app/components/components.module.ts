import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsideComponent } from './aside/aside.component';
import { ForecastComponent } from './forecast/forecast.component';
import { WidgetsModule } from '../widgets/widgets.module';



@NgModule({
  declarations: [
    AsideComponent,
    ForecastComponent
  ],
  imports: [
    CommonModule,
    WidgetsModule
  ],
  exports: [
    AsideComponent,
    ForecastComponent
  ],
})
export class ComponentsModule { }
