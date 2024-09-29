import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Boat } from '../../models/boat.model';
import {
  DeleteBoatsFromBoatListAction,
  RefreshBoatListAction
} from '../actions/boat-list.action';
import { BoatListState, selectBoatList } from '../reducers/boat-list.reducer';

@Injectable({
  providedIn: 'root'
})
export class BoatListStoreService {
  constructor(private readonly _store: Store<BoatListState>) { }

  public getBoatList(): Observable<Boat[] | null> {
    return this._store.select(selectBoatList);
  }

  public refreshBoatList(): void {
    this._store.dispatch(RefreshBoatListAction());
  }

  public deleteBoatFromBoatList(boatId: number): void {
    this.deleteBoatsFromBoatList([boatId]);
  }

  public deleteBoatsFromBoatList(boatIdList: number[]): void {
    this._store.dispatch(DeleteBoatsFromBoatListAction({ boatIdList }));
  }
}
