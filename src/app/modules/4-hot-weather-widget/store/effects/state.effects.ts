import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, mergeMap, switchMap } from 'rxjs/operators';
import { Hotel } from '../../../shared/services/api.service';
import { EMPTY } from 'rxjs';
import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HotelsActions } from '../action/state.actions';

@Injectable()
export class HotelsEffects {

  public getHotels$ = createEffect(() => this.actions$.pipe(
    ofType(HotelsActions.getHotelsPending),
    switchMap(() => this.http.get<Hotel[]>(this.env.api.data)
      .pipe(
        mergeMap((hotels) => [
          HotelsActions.getHotelsSuccess({ hotels })
        ]),
        catchError(() => {
          return EMPTY;
        })
      )
    ))
  );

  constructor(
    private actions$: Actions,
    private http: HttpClient,
    @Inject('environment') private env: { api: { data: string } }
  ) {
  }
}
