import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { AuthNavigationActionPathEnum } from './constants/auth-navigation-action-path.enum';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: AuthNavigationActionPathEnum.LOGIN,
        component: LoginComponent
      },
      {
        path: AuthNavigationActionPathEnum.REGISTER,
        component: RegistrationComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
