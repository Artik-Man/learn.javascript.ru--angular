import { Component, Input, OnInit } from '@angular/core';
import { Hotel } from '../services/hot-weather-widget-api';

@Component({
  selector: 'app-hot-weather-widget-weather',
  templateUrl: './hot-weather-widget-weather.component.html',
  styleUrls: ['./hot-weather-widget-weather.component.scss']
})
export class HotWeatherWidgetWeatherComponent implements OnInit {
  public currentHotel: Hotel;

  @Input() set hotel(hotel: Hotel) {
    this.currentHotel = hotel;
  }

  constructor() {
  }

  ngOnInit() {
  }

}
