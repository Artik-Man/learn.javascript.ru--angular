import { createAction, props } from '@ngrx/store';
import { Hotel } from '../../../shared/services/api.service';

export enum hotelActionType {
  HOTELS_GET_PENDING = '[Hotels] Get hotels pending',
  HOTELS_GET_SUCCESS = '[Hotels] Get hotels success',
  SELECT_HOTEL = '[Hotels] Select hotel',
}

export const getHotelsPending = createAction(
  hotelActionType.HOTELS_GET_PENDING
);
export const getHotelsSuccess = createAction(
  hotelActionType.HOTELS_GET_SUCCESS,
  props<{ hotels: Hotel[] }>()
);

export const selectHotel = createAction(
  hotelActionType.SELECT_HOTEL,
  props<{ hotel: Hotel }>()
);

export const getHotelPending = createAction(
  '[Hotels] Get hotel pending'
);
export const getHotelSuccess = createAction(
  '[Hotels] Get hotel success',
  props<{ hotel: Hotel }>()
);


