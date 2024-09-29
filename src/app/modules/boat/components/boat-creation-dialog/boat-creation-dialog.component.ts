import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-boat-creation-dialog',
  templateUrl: './boat-creation-dialog.component.html'
})
export class BoatCreationDialogComponent {


  public boatCreationFormGroup = this._formBuilder.group({
    name: new FormControl<string | undefined>(undefined,
      [
        Validators.required
      ]
    ),
    description: new FormControl<string | undefined>(undefined,
      [
        Validators.required
      ]
    )
  });

  constructor(private readonly _formBuilder: FormBuilder, private readonly _dialogRef: MatDialogRef<BoatCreationDialogComponent>) { }

  public confirmCreation(): void {
    this._dialogRef.close(this.boatCreationFormGroup.value);
  }
}
