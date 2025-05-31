import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalchangefontPage } from './modalchangefont.page';

const routes: Routes = [
  {
    path: '',
    component: ModalchangefontPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalchangefontPageRoutingModule {}
