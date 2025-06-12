import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalchangecolorfontPageRoutingModule } from './modalchangecolorfont-routing.module';

import { ModalchangecolorfontPage } from './modalchangecolorfont.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalchangecolorfontPageRoutingModule
  ],
  declarations: [ModalchangecolorfontPage]
})
export class ModalchangecolorfontPageModule {}
