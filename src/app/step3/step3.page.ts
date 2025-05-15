import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AnimationService } from '../services/animation.service';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-step3',
  templateUrl: './step3.page.html',
  styleUrls: ['./step3.page.scss'],
  standalone: false
})
export class Step3Page {
  animations: any[] = [];
  name = localStorage.getItem('name') || 'Nombre';
  age = localStorage.getItem('age') || '00';
  color1 = localStorage.getItem('color1') || '#ff4081';
  color2 = localStorage.getItem('color2') || '#3f51b5';
  seleccionada: string = localStorage.getItem('animacion_seleccionada') || '';

  constructor(
    private navCtrl: NavController,
    private animationService: AnimationService,
    public storageService: StorageService
  ) {}

  ionViewWillEnter() {
    this.storageService.loadCache();
    console.log('Cache cargado:', this.storageService.data);
  }

  ngOnInit() {
    this.animations = this.animationService.getAnimations(this.name, this.age, this.color1, this.color2);
  }

  seleccionar_animacion(numero: string) {
    this.seleccionada = numero;
    localStorage.setItem('animacion_seleccionada', numero);
  }

  selectAnimation() {
    this.navCtrl.navigateForward('/step4');
  }

  atras() {
    this.navCtrl.navigateRoot('/step2');
  }
}
