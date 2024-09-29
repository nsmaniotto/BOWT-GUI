import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material/material.module';
import { SharedModule } from '../shared/shared.module';
import { BoatRoutingModule } from './boat-routing.module';
import { BoatCreateButtonComponent } from './components/boat-create-button/boat-create-button.component';
import { BoatCreationDialogComponent } from './components/boat-creation-dialog/boat-creation-dialog.component';
import { BoatTableComponent } from './components/boat-table/boat-table.component';
import { BoatPageContainer } from './containers/boat-page/boat-page.container';
import { BoatDetailsDialogComponent } from './components/boat-details-dialog/boat-details-dialog.component';

@NgModule({
  declarations: [
    BoatPageContainer,
    BoatTableComponent,
    BoatCreateButtonComponent,
    BoatCreationDialogComponent,
    BoatDetailsDialogComponent
  ],
  imports: [
    BoatRoutingModule,
    CommonModule,
    SharedModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class BoatModule { }
