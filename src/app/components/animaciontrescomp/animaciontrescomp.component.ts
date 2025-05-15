import { Component, OnInit } from '@angular/core';
import { IonText, IonContent } from "@ionic/angular/standalone";
import { StorageService } from 'src/app/services/storage.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-animaciontrescomp',
  templateUrl: './animaciontrescomp.component.html',
  styleUrls: ['./animaciontrescomp.component.scss'],
  imports: [CommonModule], // Add IonContent to imports

})
export class AnimaciontrescompComponent  implements OnInit {

  constructor( public storageService: StorageService) { 



    
  }

  ngOnInit() {


    
  }





}
