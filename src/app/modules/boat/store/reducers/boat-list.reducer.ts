import { createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';
import { Boat } from '../../models/boat.model';
import { BoatListRefreshedAction, RefreshBoatListAction } from '../actions/boat-list.action';

export interface BoatListState {
  boatList: Boat[] | null;
  refreshed: boolean;
  refreshing: boolean;
}

const initialState: BoatListState = {
  boatList: null,
  refreshed: false,
  refreshing: false
};

export const boatListReducer = createReducer(
  initialState,
  on(RefreshBoatListAction, (state: BoatListState) => {
    return {
      ...state,
      boatList: null,
      refreshed: false,
      refreshing: true
    };
  }),
  on(BoatListRefreshedAction, (state: BoatListState, action) => {
    return {
      ...state,
      boatList: action.payload ?? [],
      refreshed: true,
      refreshing: false
    };
  })
);

export const getBoatListSelector = createFeatureSelector<BoatListState>('boatListStore');

export const selectBoatList = createSelector(
  getBoatListSelector,
  ({ boatList }) => boatList
);
