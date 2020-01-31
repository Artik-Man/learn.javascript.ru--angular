import { Component, Input, OnInit } from '@angular/core';
import { Hotel } from '../services/hot-weather-widget-api';

@Component({
  selector: 'app-hot-weather-widget-social',
  templateUrl: './hot-weather-widget-social.component.html',
  styleUrls: ['./hot-weather-widget-social.component.scss']
})
export class HotWeatherWidgetSocialComponent implements OnInit {
  public currentHotel: Hotel;

  @Input() set hotel(hotel: Hotel) {
    this.currentHotel = hotel;
  }

  constructor() {
  }

  ngOnInit() {
  }

}
