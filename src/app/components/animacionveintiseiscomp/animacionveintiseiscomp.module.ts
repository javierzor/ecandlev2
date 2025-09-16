import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnimacionveintiseiscompPageRoutingModule } from './animacionveintiseiscomp-routing.module';

import { AnimacionveintiseiscompPage } from './animacionveintiseiscomp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnimacionveintiseiscompPageRoutingModule
  ],
  declarations: [AnimacionveintiseiscompPage]
})
export class AnimacionveintiseiscompPageModule {}
