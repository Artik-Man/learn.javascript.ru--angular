import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Hotel } from '../services/hot-weather-widget-api';
import {Observable} from 'rxjs';
import {StateService} from '../services/state.service';

@Component({
  selector: 'app-hot-weather-widget-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SocialComponent {
  public currentHotel: Observable<Hotel>;

  constructor(private stateService: StateService) {
    this.currentHotel = this.stateService.currentHotel.asObservable();
  }
}
