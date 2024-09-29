import { Component, inject, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BoatCreationDialogComponent } from '../../components/boat-creation-dialog/boat-creation-dialog.component';
import { BoatListStoreService } from '../../store/service/boat-list-store.service';
import { BoatStoreService } from '../../store/service/boat-store.service';

@Component({
  selector: 'app-boat-page',
  templateUrl: './boat-page.container.html',
  styleUrls: ['./boat-page.container.css']
})
export class BoatPageContainer implements OnInit {
  constructor(
    private readonly _boatListStoreService: BoatListStoreService,
    private readonly _boatStoreService: BoatStoreService
  ) { }

  public readonly boatList$ = this._boatListStoreService.getBoatList();

  private readonly _dialog = inject(MatDialog);

  ngOnInit(): void {
    this._boatListStoreService.refreshBoatList();
  }

  public openBoatCreationDialog(): void {
    const boatCreationDialogRef = this._dialog.open(BoatCreationDialogComponent);

    boatCreationDialogRef.afterClosed().subscribe(result => {
      if (result !== undefined) {
        this._boatStoreService.createBoat(result);
      }
    });
  }
}
