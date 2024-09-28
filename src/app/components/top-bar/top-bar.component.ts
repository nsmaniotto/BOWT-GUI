import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { catchError, Subscription, throwError } from 'rxjs';
import { NavigationPathEnum } from 'src/app/constants/navigation-path.enum';
import { NavigationRootPathEnum } from 'src/app/constants/navigation-root-path.enum';
import { AuthNavigationActionPathEnum } from 'src/app/modules/auth/constants/auth-navigation-action-path.enum';
import { AUTH_TOKEN_LOCAL_STORAGE_ITEM_KEY } from 'src/app/modules/auth/constants/auth.constant';
import { AuthService } from 'src/app/modules/auth/services/auth.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit, OnDestroy {
  @Input() appName: string | undefined;

  public readonly ROOT_PATH: string = NavigationRootPathEnum.ROOT;
  public readonly AUTH_PATH: string = NavigationPathEnum.AUTH;
  public readonly LOGIN_ACTION_PATH: string = AuthNavigationActionPathEnum.LOGIN;

  private readonly _subscriptions = new Subscription();

  public isConnectedUserValid: boolean = false;

	constructor(
    private readonly _authService: AuthService
  ) {}

  ngOnInit(): void {
    const authToken = localStorage.getItem(AUTH_TOKEN_LOCAL_STORAGE_ITEM_KEY);

    if (authToken) {
      this._retrieveConnectedUser(authToken);
    }
  }

  ngOnDestroy(): void {
    this._subscriptions.unsubscribe();
  }

  private _retrieveConnectedUser(authToken: string) {
    this._subscriptions.add(
      this._authService.getConnectedUser(authToken)
        .pipe(catchError(error => {
          if (error.response?.status === 401 || error.response?.status === 403) {
            localStorage.removeItem(AUTH_TOKEN_LOCAL_STORAGE_ITEM_KEY);
          }
          return throwError(() => error)
        }))
        .subscribe(result => {
          this.isConnectedUserValid = true;
        })
    );
  }
}


