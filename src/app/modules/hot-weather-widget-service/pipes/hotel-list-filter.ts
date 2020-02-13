import { Pipe, PipeTransform } from '@angular/core';
import { Hotel } from '../services/hot-weather-widget-api';

@Pipe({
  name: 'hotelListFilter'
})
export class HotelListFilterPipe implements PipeTransform {
  transform(list: Hotel[], filter: string): Hotel[] {
    if (!filter) {
      return list;
    }
    return list.filter(h => h.tags.includes(filter));
  }
}
