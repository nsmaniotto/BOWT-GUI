import { createAction, props } from '@ngrx/store';
import { type } from 'src/app/utils/store.util';
import { Boat } from '../../models/boat.model';

export const BoatActionTypes = {
  CREATE_BOAT: type('[Boat] Create'),
  CREATE_BOAT_SUCCESS: type('[Boat] Creation Success'),
  CREATE_BOAT_FAIL: type('[Boat] Creation Fail'),
  BOAT_CREATED: type('[Boat] Boat created'),
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
