import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnimacionveintitrescompPage } from './animacionveintitrescomp.page';

const routes: Routes = [
  {
    path: '',
    component: AnimacionveintitrescompPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnimacionveintitrescompPageRoutingModule {}
