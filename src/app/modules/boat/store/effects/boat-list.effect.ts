import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, concatMap, map } from 'rxjs/operators';
import { BoatService } from '../../services/boat.service';
import {
  BoatListActionTypes,
  BoatListRefreshedAction,
  DeleteBoatsFromBoatListFailAction,
  DeleteBoatsFromBoatListSuccessAction,
  RefreshBoatListAction,
  RefreshBoatListFailAction,
  RefreshBoatListSuccessAction
} from '../actions/boat-list.action';

@Injectable()
export class BoatListEffect {
  constructor(
    private readonly _actions$: Actions,
    private readonly _boatService: BoatService
  ) { }

  /* REFRESH BOAT LIST */
  boatListRefresh$: Observable<Action> = createEffect(() => this._actions$.pipe(
    ofType<never>(BoatListActionTypes.REFRESH_BOAT_LIST),
    concatMap(() => this._boatService.getBoats().pipe(
      map(boatList => RefreshBoatListSuccessAction(boatList)),
      catchError(error => of(RefreshBoatListFailAction(error)))
    ))
  ));

  boatListRefreshSuccess$: Observable<Action> = createEffect(() => this._actions$.pipe(
    ofType<never>(BoatListActionTypes.REFRESH_BOAT_LIST_SUCCESS),
    concatMap(payload => of(BoatListRefreshedAction(payload)))
  ));

  /* DELETE BOATS FROM BOAT LIST */
  boatListDeleteBoat$: Observable<Action> = createEffect(() => this._actions$.pipe(
    ofType<never>(BoatListActionTypes.DELETE_BOATS_FROM_BOAT_LIST),
    concatMap((payload: { boatIdList: number[] }) => this._boatService.deleteMultiple(payload.boatIdList).pipe(
      map(() => DeleteBoatsFromBoatListSuccessAction()),
      catchError(error => of(DeleteBoatsFromBoatListFailAction(error)))
    ))
  ));

  boatListDeleteBoatSuccess$: Observable<Action> = createEffect(() => this._actions$.pipe(
    ofType<never>(BoatListActionTypes.DELETE_BOATS_FROM_BOAT_LIST_SUCCESS),
    concatMap(() => of(RefreshBoatListAction()))
  ));
}
