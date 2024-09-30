import { createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';
import { User } from 'src/app/modules/user/models/user.model';
import { ConnectedUserRefreshedAction, RefreshConnectedUserAction } from '../actions/auth.action';

export interface AuthState {
  connectedUser: User | null;
  refreshed: boolean;
  refreshing: boolean;
}

const initialState: AuthState = {
  connectedUser: null,
  refreshed: false,
  refreshing: false
};

export const authReducer = createReducer(
  initialState,
  on(RefreshConnectedUserAction, (state: AuthState) => {
    return {
      ...state,
      connectedUser: null,
      refreshed: false,
      refreshing: true
    };
  }),
  on(ConnectedUserRefreshedAction, (state: AuthState, action) => {
    return {
      ...state,
      connectedUser: action.payload ?? [],
      refreshed: true,
      refreshing: false
    };
  })
);

export const getAuthSelector = createFeatureSelector<AuthState>('authStore');

export const selectConnectedUser = createSelector(
  getAuthSelector,
  ({ connectedUser }) => connectedUser
);
