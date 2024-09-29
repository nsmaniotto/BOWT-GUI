import { Component, OnInit } from '@angular/core';
import { BoatListStoreService } from '../../store/service/boat-list-store.service';

@Component({
  selector: 'app-boat-page',
  templateUrl: './boat-page.container.html',
  styleUrls: ['./boat-page.container.css']
})
export class BoatPageContainer implements OnInit {
  constructor(
    private readonly _boatListStoreService: BoatListStoreService
  ) { }

  public readonly boatList$ = this._boatListStoreService.getBoatList();

  ngOnInit(): void {
    this._boatListStoreService.refreshBoatList();
  }
}
