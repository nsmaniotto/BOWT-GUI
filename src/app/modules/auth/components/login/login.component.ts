import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError, Subscription, throwError } from 'rxjs';
import { NavigationPathEnum } from 'src/app/constants/navigation-path.enum';
import { NavigationRootPathEnum } from 'src/app/constants/navigation-root-path.enum';
import { User } from '../../../user/models/user.model';
import { AuthNavigationActionPathEnum } from '../../constants/auth-navigation-action-path.enum';
import { AUTH_TOKEN_LOCAL_STORAGE_ITEM_KEY } from '../../constants/auth.constant';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  })
export class LoginComponent implements OnDestroy {

  private readonly _subscriptions = new Subscription();

  public readonly AUTH_PATH = NavigationPathEnum.AUTH;
  public readonly REGISTER_ACTION_PATH = AuthNavigationActionPathEnum.REGISTER;

  public loginFormGroup = this._formBuilder.group({
    login: new FormControl<string | undefined>(undefined,
      [
        Validators.required
      ]
    ),
    password: new FormControl<string | undefined>(undefined,
      [
        Validators.required
      ]
    )
  });

	constructor(
    private readonly _authService: AuthService,
    private readonly _formBuilder: FormBuilder,
    private readonly _router: Router
  ) {}

  ngOnDestroy(): void {
    this._subscriptions.unsubscribe();
  }

	public submitLogin(): void {
    this._subscriptions.add(
      this._authService.login(this.loginFormGroup.value as User)
        .pipe(catchError(error => throwError(() => error)))
        .subscribe(result => {
          if (result && result.token) {
            // Store aquired token
            localStorage.setItem(AUTH_TOKEN_LOCAL_STORAGE_ITEM_KEY, result.token);

            // Redirect to home page
            this._router.navigate([NavigationRootPathEnum.ROOT]);
          } else {
            localStorage.removeItem(AUTH_TOKEN_LOCAL_STORAGE_ITEM_KEY);
          }
        })
    );
	}

}
