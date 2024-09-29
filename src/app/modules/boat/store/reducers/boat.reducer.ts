import { createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';
import { Boat } from '../../models/boat.model';
import {
  BoatCreatedAction,
  BoatDisplayedAction,
  CreateBoatAction,
  DisplayBoatAction
} from '../actions/boat.action';

export interface BoatState {
  boat: Boat;
  created: boolean;
  creating: boolean;
  refreshed: boolean;
  refreshing: boolean;
}

const initialState: BoatState = {
  boat: new Boat(),
  created: false,
  creating: false,
  refreshed: false,
  refreshing: false
};

export const boatReducer = createReducer(
  initialState,
  on(CreateBoatAction, (state: BoatState) => {
    return {
      ...state,
      created: false,
      creating: true
    };
  }),
  on(BoatCreatedAction, (state: BoatState, _action) => {
    return {
      ...state,
      created: true,
      creating: false
    };
  }),
  on(DisplayBoatAction, (state: BoatState) => {
    return {
      ...state,
      refreshed: false,
      refreshing: true
    };
  }),
  on(BoatDisplayedAction, (state: BoatState, _action: { payload: Boat }) => {
    return {
      ...state,
      boat: _action.payload,
      refreshed: true,
      refreshing: false
    };
  })
);

export const getBoatSelector = createFeatureSelector<BoatState>('boatStore');

export const selectBoat = createSelector(
  getBoatSelector,
  ({ boat }) => boat
);
