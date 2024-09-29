import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Boat } from '../../models/boat.model';
import { CreateBoatAction, DisplayBoatAction } from '../actions/boat.action';
import { BoatState, selectBoat } from '../reducers/boat.reducer';

@Injectable({
  providedIn: 'root'
})
export class BoatStoreService {
  constructor(private readonly _store: Store<BoatState>) { }

  public createBoat(boat: Boat): void {
    return this._store.dispatch(CreateBoatAction(boat));
  }

  public getBoat(): Observable<Boat | null> {
    return this._store.select(selectBoat);
  }

  public displayBoat(boatId: number): void {
    return this._store.dispatch(DisplayBoatAction(boatId));
  }
}
