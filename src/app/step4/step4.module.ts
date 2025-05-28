import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Step4PageRoutingModule } from './step4-routing.module';

import { Step4Page } from './step4.page';
import { AnimacionunocompComponent } from "../components/animacionunocomp/animacionunocomp.component";
import { AnimaciondoscompComponent } from '../components/animaciondoscomp/animaciondoscomp.component';
import { AnimaciontrescompComponent } from '../components/animaciontrescomp/animaciontrescomp.component';
import { AnimacioncuatrocompComponent } from '../components/animacioncuatrocomp/animacioncuatrocomp.component';
import { AnimacioncincocompComponent } from '../components/animacioncincocomp/animacioncincocomp.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Step4PageRoutingModule,
    AnimacionunocompComponent,
    AnimaciondoscompComponent,
    AnimaciontrescompComponent,
    AnimacioncuatrocompComponent,
    AnimacioncincocompComponent


  ],
  declarations: [Step4Page]
})
export class Step4PageModule { }
