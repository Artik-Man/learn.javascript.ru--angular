import { ChangeDetectionStrategy, Component } from '@angular/core';
import { StateService } from '../services/state.service';
import { Observable } from 'rxjs';
import { Hotel } from '../../shared/services/hot-weather-widget-api';

@Component({
  selector: 'app-hot-weather-widget-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WeatherComponent {
  public currentHotel: Observable<Hotel>;

  constructor(private stateService: StateService) {
    this.currentHotel = this.stateService.currentHotel.asObservable();
  }
}
