import { Hotel } from '../../../shared/services/api.service';
import { Action, createReducer, on } from '@ngrx/store';
import { getHotelsSuccess } from '../action/state.actions';

export const initialState: Hotel[] = [];

const hotelsReducerFn = createReducer(
  initialState,
  on(getHotelsSuccess, (state, { hotels }) => {
    return [...hotels];
  })
);

export function hotelsReducer(state: Hotel[] | undefined, action: Action) {
  return hotelsReducerFn(state, action);
}

