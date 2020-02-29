import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, mergeMap, switchMap } from 'rxjs/operators';
import { ApiService, Hotel } from '../../../shared/services/api.service';
import { EMPTY } from 'rxjs';
import { getHotelPending, getHotelsPending, getHotelsSuccess, getHotelSuccess } from '../action/state.actions';
import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HotelsEffects {

  public getHotels$ = createEffect(() => this.actions$.pipe(
    ofType(getHotelsPending),
    switchMap(() => this.http.get<Hotel[]>(this.env.api.data)
      .pipe(
        mergeMap((hotels) => [
          getHotelsSuccess({ hotels }),
        ]),
        catchError(() => {
          return EMPTY;
        })
      )
    ))
  );

  // public getCurrentHotel$ = createEffect(() => this.actions$.pipe(
  //   ofType(getHotelPending),
  //   switchMap(() => this.getHotels$
  //     .pipe(
  //       mergeMap((hotel) => [
  //         getHotelSuccess({ hotel }),
  //       ]),
  //       catchError(() => {
  //         return EMPTY;
  //       })
  //     )
  //   ))
  // );

  constructor(
    private actions$: Actions,
    private http: HttpClient,
    @Inject('environment') private env: { api: { data: string } }
  ) {
  }
}
