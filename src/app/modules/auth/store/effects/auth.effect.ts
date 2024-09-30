import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, concatMap, map, tap } from 'rxjs/operators';
import { NavigationRootPathEnum } from 'src/app/constants/navigation-root-path.enum';
import { User } from 'src/app/modules/user/models/user.model';
import { AUTH_TOKEN_LOCAL_STORAGE_ITEM_KEY } from '../../constants/auth.constant';
import { AuthService } from '../../services/auth.service';
import {
  AuthActionTypes,
  ConnectedUserRefreshedAction,
  LoginFailAction,
  LoginSuccessAction,
  RefreshConnectedUserFailAction,
  RefreshConnectedUserSuccessAction,
  RegisterSuccessAction
} from '../actions/auth.action';

@Injectable()
export class AuthEffect {
  constructor(
    private readonly _actions$: Actions,
    private readonly _authService: AuthService,
    private readonly _router: Router
  ) { }

  /* REFRESH CONNECTED USER */
  connectedUserRefresh$: Observable<Action> = createEffect(() => this._actions$.pipe(
    ofType<never>(AuthActionTypes.REFRESH_CONNECTED_USER),
    concatMap((action: { payload: string }) => this._authService.getConnectedUser(action.payload).pipe(
      map(connectedUser => RefreshConnectedUserSuccessAction(connectedUser)),
      catchError(error => of(RefreshConnectedUserFailAction(error)))
    ))
  ));

  connectedUserRefreshSuccess$: Observable<Action> = createEffect(() => this._actions$.pipe(
    ofType<never>(AuthActionTypes.REFRESH_CONNECTED_USER_SUCCESS),
    concatMap((action: { payload: User }) => of(ConnectedUserRefreshedAction(action.payload)))
  ));

  connectedUserRefreshFail$: Observable<Action> = createEffect(() => this._actions$.pipe(
    ofType<never>(AuthActionTypes.REFRESH_CONNECTED_USER_FAIL),
    concatMap(() => of(ConnectedUserRefreshedAction(new User())))
  ));

  /* LOGIN */
  login$: Observable<Action> = createEffect(() => this._actions$.pipe(
    ofType<never>(AuthActionTypes.LOGIN),
    concatMap((action: { payload: User }) => this._authService.login(action.payload).pipe(
      map(connectedUser => {
        localStorage.setItem(AUTH_TOKEN_LOCAL_STORAGE_ITEM_KEY, connectedUser.token as string);
        return LoginSuccessAction(connectedUser);
      }),
      catchError(error => of(LoginFailAction(error)))
    ))
  ));

  loginSuccess$: Observable<Action> = createEffect(() => this._actions$.pipe(
    ofType<never>(AuthActionTypes.LOGIN_SUCCESS),
    concatMap((action: { payload: User }) => of(ConnectedUserRefreshedAction(action.payload))),
    tap(() => this._router.navigate([NavigationRootPathEnum.ROOT]))
  ));

  /* REGISTER */
  register$: Observable<Action> = createEffect(() => this._actions$.pipe(
    ofType<never>(AuthActionTypes.REGISTER),
    concatMap((action: { payload: User }) => this._authService.register(action.payload).pipe(
      map(connectedUser => {
        localStorage.setItem(AUTH_TOKEN_LOCAL_STORAGE_ITEM_KEY, connectedUser.token as string);
        return RegisterSuccessAction(connectedUser);
      }),
      catchError(error => of(LoginFailAction(error)))
    ))
  ));

  registerSuccess$: Observable<Action> = createEffect(() => this._actions$.pipe(
    ofType<never>(AuthActionTypes.REGISTER_SUCCESS),
    concatMap((action: { payload: User }) => of(ConnectedUserRefreshedAction(action.payload))),
    tap(() => this._router.navigate([NavigationRootPathEnum.ROOT]))
  ));
}
