import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, Observable, throwError } from 'rxjs';
import { NavigationRootPathEnum } from '../constants/navigation-root-path.enum';
import { AuthNavigationActionPathEnum } from '../modules/auth/constants/auth-navigation-action-path.enum';
import { AUTH_TOKEN_LOCAL_STORAGE_ITEM_KEY } from '../modules/auth/constants/auth.constant';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private readonly _router: Router) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Retrieve the token from local storage
    const token = localStorage.getItem(AUTH_TOKEN_LOCAL_STORAGE_ITEM_KEY);

    // Clone the request to add the new Authorization header
    let authReq = req;
    if (token) {
      authReq = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
    }

    // Handle the HTTP request
    return next.handle(authReq).pipe(
      // Catch errors to handle them
      catchError((error: HttpErrorResponse) => {
        // If we receive a 401 (Unauthorized) or 403 (Forbidden), redirect to the login page
        if (error.status === 401 || error.status === 403) {
          // Clear the token from localStorage (optional)
          localStorage.removeItem(AUTH_TOKEN_LOCAL_STORAGE_ITEM_KEY);
          // Redirect the user to the login page
          this._router.navigate([NavigationRootPathEnum.AUTH, AuthNavigationActionPathEnum.LOGIN]);
        }

        // Return the error to the caller
        return throwError(error);
      })
    );
  }
}
