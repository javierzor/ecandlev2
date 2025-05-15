import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';
import { IonContent } from "@ionic/angular/standalone";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  
  selector: 'app-animaciondoscomp',
  templateUrl: './animaciondoscomp.component.html',
  styleUrls: ['./animaciondoscomp.component.scss'],
  imports: [CommonModule], // Add IonContent to imports
})


export class AnimaciondoscompComponent  implements OnInit {

  constructor( public storageService: StorageService) { }

  ngOnInit() {}

}
