import { Component, OnInit } from '@angular/core';
import { Boat } from '../../models/boat.model';
import { BoatService } from '../../services/boat.service';

@Component({
  selector: 'app-boat-page',
  templateUrl: './boat-page.container.html',
  styleUrls: ['./boat-page.container.css']
})
export class BoatPageContainer implements OnInit {
  constructor(private readonly _boatService: BoatService) { }

  public boats: Boat[] = [];
  public data: any;

  ngOnInit(): void {
    this._boatService.getBoats().subscribe(boats => this.boats = boats);
  }

}
