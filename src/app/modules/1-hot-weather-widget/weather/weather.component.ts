import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Hotel } from '../../shared/services/api.service';

@Component({
  selector: 'app-hot-weather-widget-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WeatherComponent {
  @Input() weather: Hotel['weather'];
}
