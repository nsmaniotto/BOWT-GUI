import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { BoatFieldMaxLength, BoatFieldMinLength } from '../../models/boat.model';

@Component({
  selector: 'app-boat-creation-dialog',
  templateUrl: './boat-creation-dialog.component.html',
  styleUrls: ['./boat-creation-dialog.component.css']
})
export class BoatCreationDialogComponent {

  public readonly boatNameFieldMinLength = BoatFieldMinLength.NAME;
  public readonly boatNameFieldMaxLength = BoatFieldMaxLength.NAME;
  public readonly boatDescriptionFieldMinLength = BoatFieldMinLength.DESCRIPTION;
  public readonly boatDescriptionFieldMaxLength = BoatFieldMaxLength.DESCRIPTION;

  public boatCreationFormGroup = this._formBuilder.group({
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

  constructor(private readonly _formBuilder: FormBuilder, private readonly _dialogRef: MatDialogRef<BoatCreationDialogComponent>) { }

  public confirmCreation(): void {
    if (this.boatCreationFormGroup.valid) {
      this._dialogRef.close(this.boatCreationFormGroup.value);
    }
  }
}
