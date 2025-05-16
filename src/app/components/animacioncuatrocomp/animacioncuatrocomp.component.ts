import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-animacioncuatrocomp',
  templateUrl: './animacioncuatrocomp.component.html',
  styleUrls: ['./animacioncuatrocomp.component.scss'],
  imports: [CommonModule], // Add IonContent to imports

})
export class AnimacioncuatrocompComponent implements OnInit {

  constructor(public storageService: StorageService, private router: Router, private navCtrl: NavController,

  ) { }

  ionViewWillEnter() {
    this.storageService.loadCache();

  }

  ngOnInit() { }


  goToStep3() {
    this.router.navigate([`home`]);

  }

}
