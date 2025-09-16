import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnimacionveintitrescompPageRoutingModule } from './animacionveintitrescomp-routing.module';

import { AnimacionveintitrescompPage } from './animacionveintitrescomp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnimacionveintitrescompPageRoutingModule
  ],
  declarations: [AnimacionveintitrescompPage]
})
export class AnimacionveintitrescompPageModule {}
