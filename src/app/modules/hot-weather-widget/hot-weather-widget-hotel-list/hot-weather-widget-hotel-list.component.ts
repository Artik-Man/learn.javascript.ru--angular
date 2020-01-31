import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { Hotel } from '../services/hot-weather-widget-api';

@Component({
  selector: 'app-hot-weather-widget-hotel-list',
  templateUrl: './hot-weather-widget-hotel-list.component.html',
  styleUrls: ['./hot-weather-widget-hotel-list.component.scss']
})
export class HotWeatherWidgetHotelListComponent implements OnInit, OnChanges {
  public currentHotel: Hotel = null;
  public list: Hotel[] = [];

  @Input() set hotelList(list: Hotel[]) {
    this.list = list;
    if (list.length) {
      this.select(list[0]);
    }
  }

  @Output() selectHotel = new EventEmitter<Hotel>();

  constructor() {
  }

  ngOnInit() {
  }

  public ngOnChanges(): void {

  }

  public select(hotel: Hotel) {
    this.currentHotel = hotel;
    if (this.currentHotel) {
      this.selectHotel.emit(this.currentHotel);
    }
  }

}
