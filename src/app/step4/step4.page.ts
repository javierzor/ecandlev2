import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AnimationService } from '../services/animation.service';
import { IonHeader } from "@ionic/angular/standalone";
import { AnimationItem, LottiePlayer } from 'lottie-web';
import * as lottie from 'lottie-web';  // Esta línea es importante para poder usar lottie directamente
import { Router } from '@angular/router';
import { StorageService } from 'src/app/services/storage.service';
import { ScreenOrientation } from '@awesome-cordova-plugins/screen-orientation/ngx';
import { Capacitor } from '@capacitor/core';
import { Platform } from '@ionic/angular';
import { Insomnia } from '@awesome-cordova-plugins/insomnia/ngx';

@Component({
  selector: 'app-step4',
  templateUrl: './step4.page.html',
  styleUrls: ['./step4.page.scss'],
  standalone: false

})
export class Step4Page {
  finalAnimation = '';

  private animation: AnimationItem;
  selected_animation: string = '1';
  pagina: number = 1

  constructor(
    private navCtrl: NavController,
    private animationService: AnimationService,
    private router: Router,
    public storageService: StorageService,
    private screenOrientation: ScreenOrientation,
    private platform: Platform,
    private insomnia: Insomnia

  ) {

    this.bloquearLandscape();

  }


  ngOnInit() {
    this.storageService.loadCache();
    console.log('Cache cargado:', this.storageService.data);
    // this.loadLottieAnimation();
  }
  
  bloquearLandscape() {
    // Solo intentar cambiar orientación si es Android o iOS
    if (
      Capacitor.getPlatform() === 'android' ||
      Capacitor.getPlatform() === 'ios'
    ) {
      this.platform.ready().then(() => {
        try {
          this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE)
            .then(() => console.log('Orientación bloqueada a horizontal'))
            .catch(err => console.warn('No se pudo bloquear orientación:', err));
        } catch (e) {
          console.warn('Error en orientación:', e);
        }
      });
    } else {
      console.log('Orientación no forzada: estamos en navegador');
    }
  }

  ionViewWillEnter() {
    this.storageService.loadCache();
    console.log('Cache cargado:', this.storageService.data);
    this.bloquearLandscape();
    this.restringirbloqueoconinsonmia();


  }

  restringirbloqueoconinsonmia() {
    // Solo intentar restringir el bloqueo de pantalla si es Android o iOS
    if (
      Capacitor.getPlatform() === 'android' ||
      Capacitor.getPlatform() === 'ios'
    ) {
      this.platform.ready().then(() => {
        try {
          this.insomnia.keepAwake()
            .then(() => console.log('Pantalla no se apagará'))
            .catch(e => console.log('Error al mantener pantalla activa', e));

        } catch (e) {
          console.warn('Error en orientación:', e);
        }
      });
    } else {
      console.log('Orientación no forzada: estamos en navegador');
    }
  }


  ngOnDestroy() {
    if (this.animation) {
      this.animation.destroy();
    }

    this.insomnia.allowSleepAgain()
      .then(() => console.log('Pantalla puede apagarse de nuevo'))
      .catch(e => console.log('Error al permitir suspensión de pantalla', e));


  }

  irapaso1() {
    this.router.navigate(['/home']);
  }

  goBack() {
    this.navCtrl.navigateBack('/step3');
  }


}
