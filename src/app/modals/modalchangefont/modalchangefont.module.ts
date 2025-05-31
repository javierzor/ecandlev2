import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalchangefontPageRoutingModule } from './modalchangefont-routing.module';

import { ModalchangefontPage } from './modalchangefont.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalchangefontPageRoutingModule
  ],
  declarations: [ModalchangefontPage]
})
export class ModalchangefontPageModule {}
