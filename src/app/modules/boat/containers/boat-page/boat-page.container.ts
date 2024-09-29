import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { catchError, Subscription, throwError } from 'rxjs';
import { BoatCreationDialogComponent } from '../../components/boat-creation-dialog/boat-creation-dialog.component';
import { BoatDetailsDialogComponent } from '../../components/boat-details-dialog/boat-details-dialog.component';
import { BoatListStoreService } from '../../store/service/boat-list-store.service';
import { BoatStoreService } from '../../store/service/boat-store.service';

@Component({
  selector: 'app-boat-page',
  templateUrl: './boat-page.container.html',
  styleUrls: ['./boat-page.container.css']
})
export class BoatPageContainer implements OnInit, OnDestroy {
  constructor(
    private readonly _boatListStoreService: BoatListStoreService,
    private readonly _boatStoreService: BoatStoreService
  ) { }

  private readonly _subscriptions = new Subscription();

  public readonly boatList$ = this._boatListStoreService.getBoatList();
  public readonly boat$ = this._boatStoreService.getBoat();

  private readonly _dialog = inject(MatDialog);

  ngOnInit(): void {
    this._boatListStoreService.refreshBoatList();

    this.initBoatDisplaySubscription();
  }

  ngOnDestroy(): void {
    this._subscriptions.unsubscribe();
  }

  public openBoatCreationDialog(): void {
    const boatCreationDialogRef = this._dialog.open(BoatCreationDialogComponent);

    boatCreationDialogRef.afterClosed().subscribe(result => {
      if (result !== undefined) {
        this._boatStoreService.createBoat(result);
      }
    });
  }

  private initBoatDisplaySubscription(): void {
    this._subscriptions.add(
      this.boat$.pipe(catchError(error => throwError(() => error)))
        .subscribe(boat => {
          if (boat?.id) {
            const boatDetailsDialogRef = this._dialog.open(BoatDetailsDialogComponent, {
              data: boat,
            });

            boatDetailsDialogRef.afterClosed().subscribe(result => {
              if (result !== undefined) {
                this._boatStoreService.createBoat(result);
              }
            });
          }
        })
    );
  }
}
