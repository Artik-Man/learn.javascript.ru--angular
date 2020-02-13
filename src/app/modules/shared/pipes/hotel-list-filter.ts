import { Pipe, PipeTransform } from '@angular/core';
import { Hotel } from '../services/api.service';

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
