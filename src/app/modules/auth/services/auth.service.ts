import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { servicesUrl } from 'src/app/environments/services-url';
import { User } from '../../user/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private readonly http: HttpClient) { }

  public login(userLoginInputs: User): Observable<User> {
    return this.http.post<User>(`${servicesUrl.authUrl}/login`, userLoginInputs);
  }

  public register(userRegistrationInputs: User): Observable<User> {
    return this.http.post<User>(`${servicesUrl.authUrl}/register`, userRegistrationInputs);
  }

  public getConnectedUser(userToken: string): Observable<User> {
    return this.http.get<User>(`${servicesUrl.authUrl}/user/${userToken}`);
  }

}
