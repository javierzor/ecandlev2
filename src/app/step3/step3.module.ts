import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Step3PageRoutingModule } from './step3-routing.module';

import { Step3Page } from './step3.page';
import { AnimacionunocompComponent } from "../components/animacionunocomp/animacionunocomp.component";
import { AnimaciondoscompComponent } from "../components/animaciondoscomp/animaciondoscomp.component";
import { AnimaciontrescompComponent } from "../components/animaciontrescomp/animaciontrescomp.component";
import { AnimacioncuatrocompComponent } from "../components/animacioncuatrocomp/animacioncuatrocomp.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Step3PageRoutingModule,
    AnimacionunocompComponent,
    AnimaciondoscompComponent,
    AnimaciontrescompComponent,
    AnimacioncuatrocompComponent
],
  declarations: [Step3Page]
})
export class Step3PageModule {}
