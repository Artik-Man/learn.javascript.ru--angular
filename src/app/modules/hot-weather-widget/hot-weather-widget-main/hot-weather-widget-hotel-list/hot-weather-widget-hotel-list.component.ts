import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {Hotel} from '../../services/hot-weather-widget-api';

@Component({
  selector: 'app-hot-weather-widget-hotel-list',
  templateUrl: './hot-weather-widget-hotel-list.component.html',
  styleUrls: ['./hot-weather-widget-hotel-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HotWeatherWidgetHotelListComponent {
  public currentHotel: Hotel = null;
  public list: Hotel[] = [];

  @Input() set hotels(list: Hotel[]) {
    this.list = list;
    if (list.length && !this.currentHotel) {
      this.select(list[0]);
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
