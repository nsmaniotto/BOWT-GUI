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
  public getBoat(boatId: number): Observable<Boat> {
    return this.http.get<Boat>(`${servicesUrl.boatUrl}/${boatId}`);
  }

  /* POST */
  public create(boat: Boat): Observable<Boat> {
    return this.http.post<Boat>(`${servicesUrl.boatUrl}`, boat);
  }

  /* PUT */
  public updateBoat(boat: Boat): Observable<void> {
    return this.http.put<void>(`${servicesUrl.boatUrl}/${boat.id}/name/${boat.name}/description/${boat.description}`, {});
  }

  /* DELETE */

}
