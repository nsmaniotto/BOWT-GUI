import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  imports: [MatButtonModule, MatIconModule, MatInputModule, MatTableModule, MatToolbarModule],
  exports: [MatButtonModule, MatIconModule, MatInputModule, MatTableModule, MatToolbarModule]
})
export class MaterialModule {}
