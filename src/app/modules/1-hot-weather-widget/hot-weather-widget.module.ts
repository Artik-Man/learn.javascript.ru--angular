import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HotWeatherWidgetComponent } from './hot-weather-widget.component';
import { RouterModule } from '@angular/router';
import { HotelListComponent } from './hotel-list/hotel-list.component';
import { WeatherComponent } from './weather/weather.component';
import { SocialComponent } from './social/social.component';
import { HotelComponent } from './hotel-list/hotel/hotel.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    HotWeatherWidgetComponent,
    HotelListComponent,
    WeatherComponent,
    SocialComponent,
    HotelComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      { path: '', component: HotWeatherWidgetComponent },
      { path: '**', redirectTo: '' }
    ])
  ],
  exports: [RouterModule]
})
export class HotWeatherWidgetModule {
  constructor() {
    console.log('1. HotWeatherWidgetModule');
  }
}
