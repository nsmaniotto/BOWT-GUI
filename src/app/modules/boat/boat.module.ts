import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material/material.module';
import { SharedModule } from '../shared/shared.module';
import { BoatRoutingModule } from './boat-routing.module';
import { BoatPageContainer } from './containers/boat-page/boat-page.container';

@NgModule({
  declarations: [
    BoatPageContainer
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
