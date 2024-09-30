import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { NavigationPathEnum } from 'src/app/constants/navigation-path.enum';
import { User, UserFieldMaxLength, UserFieldMinLength } from '../../../user/models/user.model';
import { AuthNavigationActionPathEnum } from '../../constants/auth-navigation-action-path.enum';
import { AuthStoreService } from '../../store/service/auth-store.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
  })
export class RegistrationComponent implements OnDestroy {

  private readonly _subscriptions = new Subscription();

  public readonly AUTH_PATH = NavigationPathEnum.AUTH;
  public readonly LOGIN_ACTION_PATH = AuthNavigationActionPathEnum.LOGIN;

  public readonly userFirstNameFieldMinLength = UserFieldMinLength.FIRST_NAME;
  public readonly userFirstNameFieldMaxLength = UserFieldMaxLength.FIRST_NAME;
  public readonly userLastNameFieldMinLength = UserFieldMinLength.LAST_NAME;
  public readonly userLastNameFieldMaxLength = UserFieldMaxLength.LAST_NAME;
  public readonly userLoginFieldMinLength = UserFieldMinLength.LOGIN;
  public readonly userLoginFieldMaxLength = UserFieldMaxLength.LOGIN;
  public readonly userPasswordFieldMinLength = UserFieldMinLength.PASSWORD;
  public readonly userPasswordFieldMaxLength = UserFieldMaxLength.PASSWORD;

  public registrationFormGroup = this._formBuilder.group({
    firstName: new FormControl<string | undefined>(undefined,
      [
        Validators.required,
        Validators.minLength(UserFieldMinLength.FIRST_NAME),
        Validators.maxLength(UserFieldMaxLength.FIRST_NAME)
      ]
    ),
    lastName: new FormControl<string | undefined>(undefined,
      [
        Validators.required,
        Validators.minLength(UserFieldMinLength.LAST_NAME),
        Validators.maxLength(UserFieldMaxLength.LAST_NAME)
      ]
    ),
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
    private readonly _formBuilder: FormBuilder,
    private readonly _authStoreService: AuthStoreService,
  ) {}

  ngOnDestroy(): void {
    this._subscriptions.unsubscribe();
  }

	public submitRegistration(): void {
    this._authStoreService.register(this.registrationFormGroup.value as User);
	}

}
