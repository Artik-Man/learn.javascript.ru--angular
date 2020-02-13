import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { Hotel } from '../../shared/services/hot-weather-widget-api';

@Injectable()
export class StateService {

  public readonly hotelList = new ReplaySubject<Hotel[]>(1);

  public readonly currentHotel = new ReplaySubject<Hotel>(1);

}
