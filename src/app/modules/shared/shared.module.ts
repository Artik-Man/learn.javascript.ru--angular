import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HotelListFilterPipe } from './pipes/hotel-list-filter';
import { PhonePipe } from './pipes/phone';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ApiService } from './services/api.service';
import { HTTPInterceptor } from './http.interceptor';

@NgModule({
  declarations: [
    HotelListFilterPipe,
    PhonePipe
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    HTTPInterceptor,
    ApiService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HTTPInterceptor,
      multi: true
    }
  ],
  exports: [
    HotelListFilterPipe,
    PhonePipe
  ]
})
export class SharedModule {
}
