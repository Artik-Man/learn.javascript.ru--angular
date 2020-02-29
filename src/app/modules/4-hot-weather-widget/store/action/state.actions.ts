import { createAction, props } from '@ngrx/store';
import { Hotel } from '../../../shared/services/api.service';

export const getHotelsPending = createAction(
  '[Hotels] Get hotels pending'
);
export const getHotelsSuccess = createAction(
  '[Hotels] Get hotels success',
  props<{ hotels: Hotel[] }>()
);


export const getHotelPending = createAction(
  '[Hotels] Get hotel pending'
);
export const getHotelSuccess = createAction(
  '[Hotels] Get hotel success',
  props<{ hotel: Hotel }>()
);

export const setHotelPending = createAction(
  '[Hotels] Set hotel pending'
);
export const setHotelSuccess = createAction(
  '[Hotels] Set hotel success',
  props()
);
