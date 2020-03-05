import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IRootState } from '../index';

const feature = createFeatureSelector<IRootState>('hotel');

const currentHotelSelector = createSelector(
  feature,
  (state: IRootState) => {
    console.log(state);
    return state.current;
  }
);

export const HotelsSelectors = {
  currentHotel: currentHotelSelector
};
