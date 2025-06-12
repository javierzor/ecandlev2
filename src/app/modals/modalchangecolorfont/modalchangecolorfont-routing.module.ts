import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalchangecolorfontPage } from './modalchangecolorfont.page';

const routes: Routes = [
  {
    path: '',
    component: ModalchangecolorfontPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalchangecolorfontPageRoutingModule {}
