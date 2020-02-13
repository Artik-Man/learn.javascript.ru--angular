import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HotelListFilterPipe } from './pipes/hotel-list-filter';
import { PhonePipe } from './pipes/phone';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './services/api.service';


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
    ApiService
  ],
  exports: [
    HotelListFilterPipe,
    PhonePipe
  ]
})
export class SharedModule {
}
