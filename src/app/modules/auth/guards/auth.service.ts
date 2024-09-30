import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationRootPathEnum } from 'src/app/constants/navigation-root-path.enum';
import { AuthNavigationActionPathEnum } from '../constants/auth-navigation-action-path.enum';
import { AUTH_TOKEN_LOCAL_STORAGE_ITEM_KEY } from '../constants/auth.constant';

export const AuthGuard = () => {
  const router = inject(Router);
  const authToken: string | null = localStorage.getItem(AUTH_TOKEN_LOCAL_STORAGE_ITEM_KEY);

  if (!authToken) {
    router.navigate([NavigationRootPathEnum.AUTH, AuthNavigationActionPathEnum.LOGIN])
    return false
  }
  return true
}
