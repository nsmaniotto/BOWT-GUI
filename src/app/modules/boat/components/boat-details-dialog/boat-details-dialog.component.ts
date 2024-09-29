import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Boat } from '../../models/boat.model';
import { BoatStoreService } from '../../store/service/boat-store.service';

@Component({
  selector: 'app-boat-details-dialog',
  templateUrl: './boat-details-dialog.component.html'
})
export class BoatDetailsDialogComponent implements OnInit {

  public isFormInEdition: boolean = false;

  public readonly boatData = inject<Boat>(MAT_DIALOG_DATA);

  public boatFormGroup: FormGroup | undefined;

  constructor(
    private readonly _formBuilder: FormBuilder,
    private readonly _boatStoreService: BoatStoreService,
    private readonly _dialogRef: MatDialogRef<BoatDetailsDialogComponent>
  ) { }

  ngOnInit(): void {
    this._initBoatForm();
  }

  private _initBoatForm(): void {
    // Init form with boat data
    this.boatFormGroup = this._formBuilder.group({
      id: this.boatData.id,
      name: new FormControl<string | undefined>(this.boatData.name,
        [
          Validators.required
        ]
      ),
      description: new FormControl<string | undefined>(this.boatData.description,
        [
          Validators.required
        ]
      )
    });
  }

  public toggleEditionMode(): void {
    this.isFormInEdition = !this.isFormInEdition;
  }

  public cancelEdition(): void {
    this._initBoatForm();
    this.toggleEditionMode();
  }

  public saveBoat(): void {
    this._boatStoreService.updateBoat(this.boatFormGroup?.value as Boat);

    this._dialogRef.close();
  }

}
