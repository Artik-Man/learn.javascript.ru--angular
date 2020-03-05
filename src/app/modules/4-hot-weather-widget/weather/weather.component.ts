import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Hotel } from '../../shared/services/api.service';
import { Store } from '@ngrx/store';
import { IRootState } from '../store';
import { HotelsSelectors } from '../store/selectors/hotel.selector';

@Component({
  selector: 'app-hot-weather-widget-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WeatherComponent {
  public currentHotel: Observable<Hotel>;

  constructor(private readonly store: Store<IRootState>) {
    this.currentHotel = this.store.select(HotelsSelectors.currentHotel);
  }
}
