import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phone'
})
export class PhonePipe implements PipeTransform {
  transform(filter: number): string {
    return (filter + '').replace(/(\d{3})(\d{3})(\d{2})(\d+)/, `+$1-$2-$3-$4`);
  }
}
