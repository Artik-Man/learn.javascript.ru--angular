import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HotWeatherWidgetMainComponent } from './hot-weather-widget-main/hot-weather-widget-main.component';
import { RouterModule } from '@angular/router';
import { HotWeatherWidgetHotelListComponent } from './hot-weather-widget-hotel-list/hot-weather-widget-hotel-list.component';
import { HotWeatherWidgetWeatherComponent } from './hot-weather-widget-weather/hot-weather-widget-weather.component';
import { HotWeatherWidgetSocialComponent } from './hot-weather-widget-social/hot-weather-widget-social.component';
import { NgxMaskModule } from 'ngx-mask';

@NgModule({
  declarations: [
    HotWeatherWidgetMainComponent,
    HotWeatherWidgetHotelListComponent,
    HotWeatherWidgetWeatherComponent,
    HotWeatherWidgetSocialComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: HotWeatherWidgetMainComponent },
      { path: '**', redirectTo: '' }
    ]),
    NgxMaskModule.forRoot({})
  ],
  exports: [RouterModule]
})
export class HotWeatherWidgetModule {
  constructor() {
    console.log('HotWeatherWidgetModule');
  }
}
