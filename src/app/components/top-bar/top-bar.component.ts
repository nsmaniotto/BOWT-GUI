import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { catchError, Subscription, throwError } from 'rxjs';
import { NavigationRootPathEnum } from 'src/app/constants/navigation-root-path.enum';
import { AUTH_TOKEN_LOCAL_STORAGE_ITEM_KEY } from 'src/app/modules/auth/constants/auth.constant';
import { AuthStoreService } from 'src/app/modules/auth/store/service/auth-store.service';
import { User } from 'src/app/modules/user/models/user.model';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit, OnDestroy {
  @Input() appName: string | undefined;

  public readonly ROOT_PATH: string = NavigationRootPathEnum.ROOT;

  private readonly _subscriptions = new Subscription();

  public connectedUser: User | undefined;

  constructor(
    private readonly _authStoreService: AuthStoreService,
  ) {}

  ngOnInit(): void {
    const authToken = localStorage.getItem(AUTH_TOKEN_LOCAL_STORAGE_ITEM_KEY);

    if (authToken) {
      this._authStoreService.refreshConnectedUser(authToken);
    }

    this.initConnectedUserSubscription();
  }

  ngOnDestroy(): void {
    this._subscriptions.unsubscribe();
  }

  public logout(): void {
    this._authStoreService.logout();
  }

  private initConnectedUserSubscription(): void {
    this._subscriptions.add(
      this._authStoreService.getConnectedUser()
        .pipe(catchError(error => throwError(() => error)
        ))
        .subscribe(result => {
          this.connectedUser = result?.login ? result : undefined;
        })
    );
  }
}


