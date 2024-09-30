import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/modules/user/models/user.model';
import { type } from 'src/app/utils/store.util';

export const AuthActionTypes = {
  REFRESH_CONNECTED_USER: type('[Auth] Refresh connected user'),
  REFRESH_CONNECTED_USER_SUCCESS: type('[Auth] Refresh connected user Success'),
  REFRESH_CONNECTED_USER_FAIL: type('[Auth] Refresh connected user Fail'),
  CONNECTED_USER_REFRESHED: type('[Auth] Connected user refreshed'),
  LOGIN: type('[Auth] Login'),
  LOGIN_SUCCESS: type('[Auth] Login Success'),
  LOGIN_FAIL: type('[Auth] Login Fail'),
  LOGGED_IN: type('[Auth] Logged in'),
  REGISTER: type('[Auth] Register'),
  REGISTER_SUCCESS: type('[Auth] Register Success'),
  REGISTER_FAIL: type('[Auth] Register Fail'),
  REGISTERED: type('[Auth] Registered')
};

/* REFRESH CONNECTED USER */
export const RefreshConnectedUserAction = createAction(
  AuthActionTypes.REFRESH_CONNECTED_USER,
  props<{ payload: string }>()
);

export const RefreshConnectedUserSuccessAction = createAction(
  AuthActionTypes.REFRESH_CONNECTED_USER_SUCCESS,
  (payload: User) => ({ payload })
);

export const RefreshConnectedUserFailAction = createAction(
  AuthActionTypes.REFRESH_CONNECTED_USER_FAIL,
  (payload: User) => ({ payload })
);

export const ConnectedUserRefreshedAction = createAction(
  AuthActionTypes.CONNECTED_USER_REFRESHED,
  (payload: User) => ({ payload })
);

/* LOGIN */
export const LoginAction = createAction(
  AuthActionTypes.LOGIN,
  (payload: User) => ({ payload })
);

export const LoginSuccessAction = createAction(
  AuthActionTypes.LOGIN_SUCCESS,
  (payload: User) => ({ payload })
);

export const LoginFailAction = createAction(
  AuthActionTypes.LOGIN_FAIL,
  (payload: User) => ({ payload })
);

export const LoggedInAction = createAction(
  AuthActionTypes.LOGGED_IN,
  (payload: User) => ({ payload })
);

/* REGISTER */
export const RegisterAction = createAction(
  AuthActionTypes.REGISTER,
  (payload: User) => ({ payload })
);

export const RegisterSuccessAction = createAction(
  AuthActionTypes.REGISTER_SUCCESS,
  (payload: User) => ({ payload })
);

export const RegisterFailAction = createAction(
  AuthActionTypes.REGISTER_FAIL,
  (payload: User) => ({ payload })
);

export const RegisterInAction = createAction(
  AuthActionTypes.REGISTERED,
  (payload: User) => ({ payload })
);
