import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HotWeatherWidgetComponent } from './hot-weather-widget.component';
import { RouterModule } from '@angular/router';
import { HotelListComponent } from './hotel-list/hotel-list.component';
import { WeatherComponent } from './weather/weather.component';
import { SocialComponent } from './social/social.component';
import { HotelListFilterPipe } from './pipes/hotel-list-filter';
import { HotelComponent } from './hotel-list/hotel/hotel.component';
import { PhonePipe } from './pipes/phone';

@NgModule({
  declarations: [
    HotWeatherWidgetComponent,
    HotelListComponent,
    WeatherComponent,
    SocialComponent,
    HotelComponent,
    HotelListFilterPipe,
    PhonePipe
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: HotWeatherWidgetComponent },
      { path: '**', redirectTo: '' }
    ])
  ],
  exports: [RouterModule]
})
export class HotWeatherWidgetModule {
}
