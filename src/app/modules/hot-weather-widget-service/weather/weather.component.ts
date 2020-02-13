import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {Hotel} from '../services/hot-weather-widget-api';
import {StateService} from '../services/state.service';
import {Observable} from 'rxjs';

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
