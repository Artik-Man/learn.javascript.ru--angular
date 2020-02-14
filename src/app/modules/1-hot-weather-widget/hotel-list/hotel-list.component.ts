import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Hotel } from '../../shared/services/api.service';

@Component({
  selector: 'app-hot-weather-widget-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HotelListComponent {
  public filter = '';
  public currentHotel: Hotel = null;
  public tags = new Set();
  public list: Hotel[] = [];

  @Input() set hotels(list: Hotel[]) {
    if (list) {
      this.list = list;
      if (list.length && !this.currentHotel) {
        this.select(list[0]);

        this.tags.clear();
        this.list.forEach(hotel => {
          hotel.tags.forEach(tag => {
            this.tags.add(tag);
          });
        });
      }
    }
  }

  @Output() selectHotel = new EventEmitter<Hotel>();

  public select(hotel: Hotel) {
    this.currentHotel = hotel;
    if (this.currentHotel) {
      this.selectHotel.emit(this.currentHotel);
    }
  }

}
