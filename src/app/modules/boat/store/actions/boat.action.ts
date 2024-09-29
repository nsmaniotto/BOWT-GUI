import { createAction, props } from '@ngrx/store';
import { type } from 'src/app/utils/store.util';
import { Boat } from '../../models/boat.model';

export const BoatActionTypes = {
  CREATE_BOAT: type('[Boat] Create'),
  CREATE_BOAT_SUCCESS: type('[Boat] Creation Success'),
  CREATE_BOAT_FAIL: type('[Boat] Creation Fail'),
  BOAT_CREATED: type('[Boat] Boat created'),
  DISPLAY_BOAT: type('[Boat] Display'),
  DISPLAY_BOAT_SUCCESS: type('[Boat] Display Success'),
  DISPLAY_BOAT_FAIL: type('[Boat] Display Fail'),
  BOAT_DISPLAYED: type('[Boat] Boat displayed'),
  UPDATE_BOAT: type('[Boat] Update'),
  UPDATE_BOAT_SUCCESS: type('[Boat] Update Success'),
  UPDATE_BOAT_FAIL: type('[Boat] Update Fail'),
  BOAT_UPDATED: type('[Boat] Boat updated'),
};

/* CREATE BOAT */
export const CreateBoatAction = createAction(
  BoatActionTypes.CREATE_BOAT,
  props<Boat>()
);

export const CreateBoatSuccessAction = createAction(
  BoatActionTypes.CREATE_BOAT_SUCCESS,
  props<{ boatId: number }>()
);

export const CreateBoatFailAction = createAction(
  BoatActionTypes.CREATE_BOAT_FAIL,
  props<Boat>()
);

export const BoatCreatedAction = createAction(
  BoatActionTypes.BOAT_CREATED,
  props<{ boatId: number }>()
);

/* DISPLAY BOAT */
export const DisplayBoatAction = createAction(
  BoatActionTypes.DISPLAY_BOAT,
  (payload: number) => ({ payload })
);

export const DisplayBoatSuccessAction = createAction(
  BoatActionTypes.DISPLAY_BOAT_SUCCESS,
  (payload: Boat) => ({ payload })
);

export const DisplayBoatFailAction = createAction(
  BoatActionTypes.DISPLAY_BOAT_FAIL,
  props<{ payload: Boat }>()
);

export const BoatDisplayedAction = createAction(
  BoatActionTypes.BOAT_DISPLAYED,
  props<{ payload: Boat }>()
);

/* UPDATE BOAT */
export const UpdateBoatAction = createAction(
  BoatActionTypes.UPDATE_BOAT,
  props<Boat>()
);

export const UpdateBoatSuccessAction = createAction(
  BoatActionTypes.UPDATE_BOAT_SUCCESS,
  props<{ boatId: number }>()
);

export const UpdateBoatFailAction = createAction(
  BoatActionTypes.CREATE_BOAT_FAIL,
  props<Boat>()
);

export const BoatUpdatedAction = createAction(
  BoatActionTypes.BOAT_UPDATED,
  props<{ boatId: number }>()
);
