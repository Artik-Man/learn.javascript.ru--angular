import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {Hotel} from '../services/hot-weather-widget-api';

@Component({
  selector: 'app-hot-weather-widget-weather',
  templateUrl: './hot-weather-widget-weather.component.html',
  styleUrls: ['./hot-weather-widget-weather.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HotWeatherWidgetWeatherComponent {
  public currentWeather: Hotel['weather'];

  @Input() set weather(hotel: Hotel['weather']) {
    this.currentWeather = hotel;
  }

}
