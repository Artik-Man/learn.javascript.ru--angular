import { Hotel } from '../../../shared/services/api.service';
import { Action, createReducer, on } from '@ngrx/store';
import { selectHotel } from '../action/state.actions';

export const initialState: Hotel = null;

const hotelReducerFn = createReducer(
  initialState,
  on(selectHotel, (state, { hotel }) => {
    return hotel;
  })
);

export function currentHotelReducer(state: Hotel | null, action: Action) {
  return hotelReducerFn(state, action);
}

