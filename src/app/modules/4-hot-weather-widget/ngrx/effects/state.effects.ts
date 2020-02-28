import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, mergeMap } from 'rxjs/operators';
import { ApiService } from '../../../shared/services/api.service';
import { EMPTY } from 'rxjs';

export class StateEffects {
  // public loadHotels$ = createEffect(() => this.actions$.pipe(
  //   ofType('[Hotels] List'),
  //   mergeMap(() => this.apiService.getList().pipe(
  //     map(hotels => ({ type: '[API: get hotels]', payload: hotels })),
  //     catchError(() => EMPTY)
  //   ))
  // ));

  constructor(
    private actions$: Actions,
    private apiService: ApiService
  ) {
  }
}
