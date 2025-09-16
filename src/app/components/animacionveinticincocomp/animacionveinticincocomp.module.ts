import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnimacionveinticincocompPageRoutingModule } from './animacionveinticincocomp-routing.module';

import { AnimacionveinticincocompPage } from './animacionveinticincocomp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnimacionveinticincocompPageRoutingModule
  ],
  declarations: [AnimacionveinticincocompPage]
})
export class AnimacionveinticincocompPageModule {}
