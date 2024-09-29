import { Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Boat } from '../../models/boat.model';

@Component({
  selector: 'app-boat-details-dialog',
  templateUrl: './boat-details-dialog.component.html'
})
export class BoatDetailsDialogComponent {

  public readonly boatData = inject<Boat>(MAT_DIALOG_DATA);

}
