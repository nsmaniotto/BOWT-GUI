import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { NavigationPathEnum } from 'src/app/constants/navigation-path.enum';
import { User, UserFieldMaxLength, UserFieldMinLength } from '../../../user/models/user.model';
import { AuthNavigationActionPathEnum } from '../../constants/auth-navigation-action-path.enum';
import { AuthStoreService } from '../../store/service/auth-store.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  })
export class LoginComponent implements OnDestroy {

  private readonly _subscriptions = new Subscription();

  public readonly AUTH_PATH = NavigationPathEnum.AUTH;
  public readonly REGISTER_ACTION_PATH = AuthNavigationActionPathEnum.REGISTER;

  public readonly userLoginFieldMinLength = UserFieldMinLength.LOGIN;
  public readonly userLoginFieldMaxLength = UserFieldMaxLength.LOGIN;
  public readonly userPasswordFieldMinLength = UserFieldMinLength.PASSWORD;
  public readonly userPasswordFieldMaxLength = UserFieldMaxLength.PASSWORD;

  public loginFormGroup = this._formBuilder.group({
    login: new FormControl<string | undefined>(undefined,
      [
        Validators.required,
        Validators.minLength(UserFieldMinLength.LOGIN),
        Validators.maxLength(UserFieldMaxLength.LOGIN)
      ]
    ),
    password: new FormControl<string | undefined>(undefined,
      [
        Validators.required,
        Validators.minLength(UserFieldMinLength.PASSWORD),
        Validators.maxLength(UserFieldMaxLength.PASSWORD)
      ]
    )
  });

	constructor(
    private readonly _authStoreService: AuthStoreService,
    private readonly _formBuilder: FormBuilder
  ) {}

  ngOnDestroy(): void {
    this._subscriptions.unsubscribe();
  }

	public submitLogin(): void {
    if (this.loginFormGroup.valid) {
      this._authStoreService.login(this.loginFormGroup.value as User);
    }
	}

}
