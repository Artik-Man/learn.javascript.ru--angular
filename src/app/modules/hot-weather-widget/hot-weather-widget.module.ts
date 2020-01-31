import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HotWeatherWidgetMainComponent } from './hot-weather-widget-main/hot-weather-widget-main.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HotWeatherWidgetMainComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: HotWeatherWidgetMainComponent },
      { path: '**', redirectTo: '' }
    ])
  ],
  exports: [RouterModule]
})
export class HotWeatherWidgetModule {
  constructor() {
    console.log('HotWeatherWidgetModule');
  }
}
