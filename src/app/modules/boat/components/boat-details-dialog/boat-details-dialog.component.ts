import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Boat, BoatFieldMaxLength, BoatFieldMinLength } from '../../models/boat.model';
import { BoatStoreService } from '../../store/service/boat-store.service';

@Component({
  selector: 'app-boat-details-dialog',
  templateUrl: './boat-details-dialog.component.html',
  styleUrls: ['./boat-details-dialog.component.css']
})
export class BoatDetailsDialogComponent implements OnInit {

  public readonly boatNameFieldMinLength = BoatFieldMinLength.NAME;
  public readonly boatNameFieldMaxLength = BoatFieldMaxLength.NAME;
  public readonly boatDescriptionFieldMinLength = BoatFieldMinLength.DESCRIPTION;
  public readonly boatDescriptionFieldMaxLength = BoatFieldMaxLength.DESCRIPTION;

  public isFormInEdition: boolean = false;

  public readonly boatData = inject<Boat>(MAT_DIALOG_DATA);

  public boatFormGroup = this._formBuilder.group({
    id: undefined,
    name: new FormControl<string | undefined>(undefined,
      [
        Validators.required,
        Validators.minLength(BoatFieldMinLength.NAME),
        Validators.maxLength(BoatFieldMaxLength.NAME)
      ]
    ),
    description: new FormControl<string | undefined>(undefined,
      [
        Validators.required,
        Validators.minLength(BoatFieldMinLength.DESCRIPTION),
        Validators.maxLength(BoatFieldMaxLength.DESCRIPTION)
      ]
    )
  });

  constructor(
    private readonly _formBuilder: FormBuilder,
    private readonly _boatStoreService: BoatStoreService,
    private readonly _dialogRef: MatDialogRef<BoatDetailsDialogComponent>
  ) { }

  ngOnInit(): void {
    this._resetBoatFormValues();
  }

  private _resetBoatFormValues(): void {
    this.boatFormGroup.patchValue(this.boatData);
  }

  public toggleEditionMode(): void {
    this.isFormInEdition = !this.isFormInEdition;
  }

  public cancelEdition(): void {
    this._resetBoatFormValues();
    this.toggleEditionMode();
  }

  public saveBoat(): void {
    this._boatStoreService.updateBoat(this.boatFormGroup?.value as Boat);

    this._dialogRef.close();
  }

}
