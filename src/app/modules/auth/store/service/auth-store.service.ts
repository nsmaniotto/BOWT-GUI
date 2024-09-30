import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from 'src/app/modules/user/models/user.model';
import { AUTH_TOKEN_LOCAL_STORAGE_ITEM_KEY } from '../../constants/auth.constant';
import { LoginAction, RefreshConnectedUserAction, RegisterAction } from '../actions/auth.action';
import { AuthState, selectConnectedUser } from '../reducers/auth.reducer';

@Injectable({
  providedIn: 'root'
})
export class AuthStoreService {
  constructor(private readonly _store: Store<AuthState>) { }

  public getConnectedUser(): Observable<User | null> {
    return this._store.select(selectConnectedUser);
  }

  public refreshConnectedUser(token: string): void {
    this._store.dispatch(RefreshConnectedUserAction({ payload: token }));
  }

  public login(user: User): void {
    this._store.dispatch(LoginAction(user));
  }

  public register(user: User): void {
    this._store.dispatch(RegisterAction(user));
  }

  public logout(): void {
    localStorage.removeItem(AUTH_TOKEN_LOCAL_STORAGE_ITEM_KEY)
    this._store.dispatch(RefreshConnectedUserAction({ payload: '' }));
  }
}
