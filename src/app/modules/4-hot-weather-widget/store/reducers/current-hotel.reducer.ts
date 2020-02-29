import { Hotel } from '../../../shared/services/api.service';
import { Action, createReducer, on } from '@ngrx/store';
import { getHotelSuccess } from '../action/state.actions';

export const initialState: Hotel = null;

const hotelReducerFn = createReducer(
  initialState,
  on(getHotelSuccess, (state, { hotel }) => {
    return hotel;
  })
);

export function currentHotelReducer(state: Hotel | undefined, action: Action) {
  return hotelReducerFn(state, action);
}

