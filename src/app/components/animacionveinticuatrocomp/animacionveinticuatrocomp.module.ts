import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnimacionveinticuatrocompPageRoutingModule } from './animacionveinticuatrocomp-routing.module';

import { AnimacionveinticuatrocompPage } from './animacionveinticuatrocomp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnimacionveinticuatrocompPageRoutingModule
  ],
  declarations: [AnimacionveinticuatrocompPage]
})
export class AnimacionveinticuatrocompPageModule {}
