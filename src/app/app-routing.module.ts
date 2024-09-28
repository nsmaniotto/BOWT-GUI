import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavigationRootPathEnum } from './constants/navigation-root-path.enum';
import { AuthNavigationActionPathEnum } from './modules/auth/constants/auth-navigation-action-path.enum';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: `${NavigationRootPathEnum.AUTH}/${AuthNavigationActionPathEnum.LOGIN}`
  },
  {
    path: NavigationRootPathEnum.AUTH,
    loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule)
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
