import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnimacionveintisietecompPage } from './animacionveintisietecomp.page';

const routes: Routes = [
  {
    path: '',
    component: AnimacionveintisietecompPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnimacionveintisietecompPageRoutingModule {}
