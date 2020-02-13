import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { StateService } from '../services/state.service';
import { Hotel } from '../../shared/services/hot-weather-widget-api';

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
