import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';
import { StateService } from '../services/state.service';
import { Observable, Subscription } from 'rxjs';
import { Hotel } from '../../shared/services/api.service';

@Component({
  selector: 'app-hot-weather-widget-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HotelListComponent implements OnDestroy {
  public filter = '';
  public currentHotel: Hotel = null;
  public tags = new Set();
  public list: Observable<Hotel[]>;
  private subscription: Subscription;

  constructor(private stateService: StateService) {
    this.list = this.stateService.hotelList.asObservable();

    this.subscription = this.list.subscribe(list => {
      if (!this.currentHotel && list.length) {
        this.select(list[0]);
      }
      list.forEach(hotel => {
        hotel.tags.forEach(tag => {
          this.tags.add(tag);
        });
      });
    });
  }


  public select(hotel: Hotel) {
    this.currentHotel = hotel;
    if (this.currentHotel) {
      this.stateService.currentHotel.next(this.currentHotel);
    }
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

}
