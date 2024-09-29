import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, concatMap, map } from 'rxjs/operators';
import { Boat } from '../../models/boat.model';
import { BoatService } from '../../services/boat.service';
import { RefreshBoatListAction } from '../actions/boat-list.action';
import {
  BoatActionTypes,
  BoatCreatedAction,
  CreateBoatFailAction,
  CreateBoatSuccessAction
} from '../actions/boat.action';
import { BoatListStoreService } from '../service/boat-list-store.service';

@Injectable()
export class BoatEffect {
  constructor(
    private readonly _actions$: Actions,
    private readonly _boatService: BoatService,
    private readonly _boatListStoreService: BoatListStoreService
  ) { }

  /* CREATE BOAT */
  createBoat$: Observable<Action> = createEffect(() => this._actions$.pipe(
    ofType<never>(BoatActionTypes.CREATE_BOAT),
    concatMap((boat: Boat) => this._boatService.create(boat).pipe(
      map(createdBoat => CreateBoatSuccessAction({ boatId: createdBoat.id as number })),
      catchError(error => of(CreateBoatFailAction(error)))
    ))
  ));

  boatCreationSuccess$: Observable<Action> = createEffect(() => this._actions$.pipe(
    ofType<never>(BoatActionTypes.CREATE_BOAT_SUCCESS),
    concatMap((payload: { boatId: number }) => of(BoatCreatedAction(payload)))
  ));

  boatCreated$: Observable<Action> = createEffect(() => this._actions$.pipe(
    ofType<never>(BoatActionTypes.BOAT_CREATED),
    concatMap(() => of(RefreshBoatListAction()))
  ));
}
