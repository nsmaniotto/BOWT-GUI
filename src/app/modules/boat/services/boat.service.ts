import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { servicesUrl } from 'src/app/environments/services-url';
import { Boat } from '../models/boat.model';

@Injectable({
  providedIn: 'root'
})
export class BoatService {
  constructor(private readonly http: HttpClient) { }

  /* GET */
  public getBoats(): Observable<Boat[]> {
    return this.http.get<Boat[]>(servicesUrl.boatUrl);
  }

  /* POST */
  public create(boat: Boat): Observable<Boat> {
    return this.http.post<Boat>(`${servicesUrl.boatUrl}`, boat);
  }

  /* PUT */

  /* DELETE */

}
