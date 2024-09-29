import { createAction, props } from '@ngrx/store';
import { type } from 'src/app/utils/store.util';
import { Boat } from '../../models/boat.model';

export const BoatListActionTypes = {
  REFRESH_BOAT_LIST: type('[Boat List] Refresh'),
  REFRESH_BOAT_LIST_SUCCESS: type('[Boat List] Refresh Success'),
  REFRESH_BOAT_LIST_FAIL: type('[Boat List] Refresh Fail'),
  BOAT_LIST_REFRESHED: type('[Boat List] Boat list refreshed')
};

/* REFRESH BOAT LIST */
export const RefreshBoatListAction = createAction(
  BoatListActionTypes.REFRESH_BOAT_LIST,
  (payload: Boat[] = []) => ({ payload })
);

export const RefreshBoatListSuccessAction = createAction(
  BoatListActionTypes.REFRESH_BOAT_LIST_SUCCESS,
  (payload: Boat[] = []) => ({ payload })
);

export const RefreshBoatListFailAction = createAction(
  BoatListActionTypes.REFRESH_BOAT_LIST_FAIL,
  props<{ payload: Boat[] }>()
);

export const BoatListRefreshedAction = createAction(
  BoatListActionTypes.BOAT_LIST_REFRESHED,
  props<{ payload: Boat[] }>()
);
