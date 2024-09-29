import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Boat } from '../../models/boat.model';
import { CreateBoatAction } from '../actions/boat.action';
import { BoatState } from '../reducers/boat.reducer';

@Injectable({
  providedIn: 'root'
})
export class BoatStoreService {
  constructor(private readonly _store: Store<BoatState>) { }

  public createBoat(boat: Boat): void {
    return this._store.dispatch(CreateBoatAction(boat));
  }
}
