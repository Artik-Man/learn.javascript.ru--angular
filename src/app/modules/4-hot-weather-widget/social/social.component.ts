import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Hotel } from '../../shared/services/api.service';
import { HotelsSelectors } from '../store/selectors/hotel.selector';
import { Store } from '@ngrx/store';
import { IRootState } from '../store';

@Component({
  selector: 'app-hot-weather-widget-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SocialComponent {
  public currentHotel: Observable<Hotel>;

  constructor(private readonly store: Store<IRootState>) {
    this.currentHotel = this.store.select(HotelsSelectors.currentHotel);
  }
}
