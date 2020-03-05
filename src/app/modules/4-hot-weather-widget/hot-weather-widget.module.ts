import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HotWeatherWidgetComponent } from './hot-weather-widget.component';
import { RouterModule } from '@angular/router';
import { HotelListComponent } from './hotel-list/hotel-list.component';
import { WeatherComponent } from './weather/weather.component';
import { SocialComponent } from './social/social.component';
import { HotelComponent } from './hotel-list/hotel/hotel.component';
import { StateService } from './services/state.service';
import { SharedModule } from '../shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../../../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { effects } from './store/effects';
import { HotelsEffects } from './store/effects/state.effects';
import { HotelsReducers } from './store/reducers/hotels.reducer';

@NgModule({
  declarations: [
    HotWeatherWidgetComponent,
    HotelListComponent,
    WeatherComponent,
    SocialComponent,
    HotelComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      { path: '', component: HotWeatherWidgetComponent },
      { path: '**', redirectTo: '' }
    ]),
    StoreModule.forRoot(HotelsReducers),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: !environment.production
    }),
    EffectsModule.forRoot(effects)
  ],
  providers: [
    StateService,
    HotelsEffects
  ]
})
export class HotWeatherWidgetModule {
  constructor() {
    console.log('4. HotWeatherWidgetModule');
  }
}
