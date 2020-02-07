import { Component, Input } from '@angular/core';
import { Hotel } from '../../services/hot-weather-widget-api';

@Component({
  selector: 'app-hot-weather-widget-hotel-item',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.scss']
})
export class HotelComponent {
  @Input() hotel: Hotel;
}
