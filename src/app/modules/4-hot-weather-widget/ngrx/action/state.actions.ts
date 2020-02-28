import { createAction, props } from '@ngrx/store';
import { Hotel } from '../../../shared/services/api.service';

export const list = createAction(
  '[Hotels] List',
  props<Hotel>()
);
