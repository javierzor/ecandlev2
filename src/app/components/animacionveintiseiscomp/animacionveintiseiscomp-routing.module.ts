import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnimacionveintiseiscompPage } from './animacionveintiseiscomp.page';

const routes: Routes = [
  {
    path: '',
    component: AnimacionveintiseiscompPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnimacionveintiseiscompPageRoutingModule {}
