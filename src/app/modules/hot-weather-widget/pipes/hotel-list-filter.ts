import {Pipe, PipeTransform} from '@angular/core';
import {Hotel} from '../services/hot-weather-widget-api';

@Pipe({
  name: 'hotelListFilter'
})
export class HotelListFilter implements PipeTransform {
  transform(value: Hotel[], filter: string): any {
  }
}
