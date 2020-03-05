import { Hotel } from '../../../shared/services/api.service';
import { Action, createReducer, on } from '@ngrx/store';
import { HotelsActions } from '../action/state.actions';

const hotelsReducerFn = createReducer(
  [] as Hotel[],
  on(HotelsActions.getHotelsSuccess, (state, { hotels }) => {
    return [...hotels];
  })
);

const currentHotelReducerFn = createReducer(
  null as Hotel,
  on(HotelsActions.selectHotel, (state, { current }) => {
    console.log(state, current);
    return current;
  })
);


export const HotelsReducers = {
  current: (state: Hotel, action: Action) => {
    return currentHotelReducerFn(state, action);
  },
  hotels: (state: Hotel[], action: Action) => {
    return hotelsReducerFn(state, action);
  }
};

