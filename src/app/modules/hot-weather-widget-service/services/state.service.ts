import {Injectable} from '@angular/core';
import {ReplaySubject, Subject} from 'rxjs';
import {Hotel} from './hot-weather-widget-api';
import {map, take} from 'rxjs/operators';

@Injectable()
export class StateService {

  public readonly hotelList = new ReplaySubject<Hotel[]>(1);

  public readonly currentHotel = new ReplaySubject<Hotel>(1);

}
