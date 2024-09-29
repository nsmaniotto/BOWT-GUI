import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Boat } from '../../models/boat.model';
import {
  RefreshBoatListAction
} from '../actions/boat-list.action';
import { BoatListState, selectBoatList } from '../reducers/boat-list.reducer';

@Injectable({
  providedIn: 'root'
})
export class BoatListStoreService {
  constructor(private readonly store: Store<BoatListState>) { }

  public getBoatList(): Observable<Boat[] | null> {
    return this.store.select(selectBoatList);
  }

  public refreshBoatList(): void {
    this.store.dispatch(RefreshBoatListAction());
  }
}
