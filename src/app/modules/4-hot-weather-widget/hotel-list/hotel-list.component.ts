import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { StateService } from '../services/state.service';
import { Observable, Subscription } from 'rxjs';
import { Hotel } from '../../shared/services/api.service';
import { Store } from '@ngrx/store';
import { IRootState } from '../store';
import { HotelsActions } from '../store/action/state.actions';

@Component({
  selector: 'app-hot-weather-widget-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HotelListComponent implements OnInit, OnDestroy {
  public filter = '';
  public currentHotel: Hotel = null;
  public tags = new Set();
  public list: Observable<Hotel[]>;
  private subscription: Subscription;

  constructor(
    private stateService: StateService,
    private readonly store: Store<IRootState>
  ) {

  }


  public select(hotel: Hotel) {
    this.currentHotel = hotel;
    if (this.currentHotel) {
      this.store.dispatch(HotelsActions.selectHotel({ current: hotel }));
    }
  }

  ngOnInit(): void {
    this.store.dispatch(HotelsActions.getHotelsPending());
    this.list = this.store.select('hotels');
    this.subscription = this.list
      .subscribe((hotels) => {
        this.select(hotels[0]);
      });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

}
