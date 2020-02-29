import { Hotel } from '../../shared/services/api.service';
import { hotelsReducer } from './reducers/hotels.reducer';
import { currentHotelReducer } from './reducers/current-hotel.reducer';

export interface IRootState {
  hotels: Hotel[];
  current: Hotel;
}

export const reducers = {
  hotels: hotelsReducer,
  current: currentHotelReducer
};
