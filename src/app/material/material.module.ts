import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  imports: [MatButtonModule, MatIconModule, MatInputModule, MatToolbarModule],
  exports: [MatButtonModule, MatIconModule, MatInputModule, MatToolbarModule]
})
export class MaterialModule {}
