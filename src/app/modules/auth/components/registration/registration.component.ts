import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { NavigationPathEnum } from 'src/app/constants/navigation-path.enum';
import { User } from '../../../user/models/user.model';
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

  public registrationFormGroup = this._formBuilder.group({
    firstName: new FormControl<string | undefined>(undefined,
      [
        Validators.required
      ]
    ),
    lastName: new FormControl<string | undefined>(undefined,
      [
        Validators.required
      ]
    ),
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
