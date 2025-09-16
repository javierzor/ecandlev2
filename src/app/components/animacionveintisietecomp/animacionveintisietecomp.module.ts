import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnimacionveintisietecompPageRoutingModule } from './animacionveintisietecomp-routing.module';

import { AnimacionveintisietecompPage } from './animacionveintisietecomp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnimacionveintisietecompPageRoutingModule
  ],
  declarations: [AnimacionveintisietecompPage]
})
export class AnimacionveintisietecompPageModule {}
