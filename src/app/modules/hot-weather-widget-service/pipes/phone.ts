import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phone'
})
export class PhonePipe implements PipeTransform {
  // mask: +000-000-000-00
  transform(filter: number, mask: string): string {
    const reg = (filter + '').replace(/\d/g, '(\\d)');
    let replacer = '';
    let i = 0;
    mask.split('').forEach((s) => {
      if (s === '0') {
        replacer += `$${++i}`;
      } else {
        replacer += s;
      }
    });
    return (filter + '').replace(new RegExp(reg), replacer);
  }
}
