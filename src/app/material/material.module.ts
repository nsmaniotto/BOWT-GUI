import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  imports: [MatButtonModule, MatDialogModule, MatIconModule, MatInputModule, MatTableModule, MatToolbarModule],
  exports: [MatButtonModule, MatDialogModule, MatIconModule, MatInputModule, MatTableModule, MatToolbarModule]
})
export class MaterialModule {}
