import {Component, Input, OnInit} from '@angular/core';
import {Hotel} from '../../../services/hot-weather-widget-api';

@Component({
  selector: 'app-hot-weather-widget-hotel-item',
  templateUrl: './hot-weather-widget-hotel-item.component.html',
  styleUrls: ['./hot-weather-widget-hotel-item.component.scss']
})
export class HotWeatherWidgetHotelItemComponent {
  @Input() hotel: Hotel;
}
