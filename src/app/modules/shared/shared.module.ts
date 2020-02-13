import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HotelListFilterPipe } from './pipes/hotel-list-filter';
import { PhonePipe } from './pipes/phone';



@NgModule({
  declarations: [
    HotelListFilterPipe,
    PhonePipe
  ],
  imports: [
    CommonModule
  ],
  exports:[
    HotelListFilterPipe,
    PhonePipe
  ]
})
export class SharedModule { }
