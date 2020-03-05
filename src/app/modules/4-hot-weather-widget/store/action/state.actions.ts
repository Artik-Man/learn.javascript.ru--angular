import { createAction, props } from '@ngrx/store';
import { Hotel } from '../../../shared/services/api.service';

export enum hotelActionType {
  HOTELS_GET_PENDING = '[Hotels] Get hotels pending',
  HOTELS_GET_SUCCESS = '[Hotels] Get hotels success',
  SELECT_HOTEL = '[Hotels] Select hotel',
}

const getHotelsPendingAction = createAction(
  hotelActionType.HOTELS_GET_PENDING
);
const getHotelsSuccessAction = createAction(
  hotelActionType.HOTELS_GET_SUCCESS,
  props<{ hotels: Hotel[] }>()
);

const selectHotelAction = createAction(
  hotelActionType.SELECT_HOTEL,
  props<{ current: Hotel }>()
);

export const HotelsActions = {
  getHotelsPending: getHotelsPendingAction,
  getHotelsSuccess: getHotelsSuccessAction,
  selectHotel: selectHotelAction
};
