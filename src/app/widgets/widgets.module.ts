import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchLocationComponent } from './search-location/search-location.component';



@NgModule({
  declarations: [
    SearchLocationComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SearchLocationComponent
  ],
})
export class WidgetsModule { }
