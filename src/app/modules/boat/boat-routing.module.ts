import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoatPageContainer } from './containers/boat-page/boat-page.container';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: BoatPageContainer
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BoatRoutingModule { }
