import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavigationRootPathEnum } from './constants/navigation-root-path.enum';
import { AuthGuard } from './modules/auth/guards/auth.service';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: NavigationRootPathEnum.BOAT
  },
  {
    path: NavigationRootPathEnum.AUTH,
    loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: NavigationRootPathEnum.BOAT,
    canActivate: [AuthGuard],
    loadChildren: () => import('./modules/boat/boat.module').then(m => m.BoatModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
