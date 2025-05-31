import { Component } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { AnimationService } from '../services/animation.service';
import { StorageService } from '../services/storage.service';
import { ModalchangefontPage } from '../modals/modalchangefont/modalchangefont.page';
import { ScreenOrientation } from '@awesome-cordova-plugins/screen-orientation/ngx';
import { Capacitor } from '@capacitor/core';
import { Platform } from '@ionic/angular';
import { Insomnia } from '@awesome-cordova-plugins/insomnia/ngx';

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
  seleccionada: string = localStorage.getItem('animacion_seleccionada') || '1';
  esperar_click_cambiar_fuente: boolean = false;
  constructor(
    private navCtrl: NavController,
    private animationService: AnimationService,
    public storageService: StorageService,
    private modalController: ModalController,
    private screenOrientation: ScreenOrientation,
    private platform: Platform,
    private insomnia: Insomnia
  ) { }


  ionViewWillEnter() {
    this.storageService.loadCache();
    console.log('Cache cargado:', this.storageService.data);
    this.bloquearPortrait();
  }

    bloquearPortrait() {
      // Solo intentar cambiar orientación si es Android o iOS
      if (
        Capacitor.getPlatform() === 'android' ||
        Capacitor.getPlatform() === 'ios'
      ) {
        this.platform.ready().then(() => {
          try {
            this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT)
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

  ngOnInit() {
    this.storageService.loadCache();
    console.log('Cache cargado:', this.storageService.data);
  }

  seleccionar_animacion(numero: string) {
    this.seleccionada = numero;
    localStorage.setItem('animacion_seleccionada', numero);
  }

  selectAnimation() {
    localStorage.setItem('animacion_seleccionada', this.seleccionada);

    this.navCtrl.navigateForward('/step4');
  }

  atras() {
    this.navCtrl.navigateRoot('/step2');
  }
  console() {
    console.log('console')
  }


  changefont() {
    console.log('changing font...')
    this.AbrirModalLogin();
  }


  async AbrirModalLogin() {
          this.esperar_click_cambiar_fuente=true;

    setTimeout(() => {
      this.esperar_click_cambiar_fuente=false;
    }, 3000);
    const modal = await this.modalController.create({
      component: ModalchangefontPage,
      cssClass: 'transparent-background',

      componentProps: {
        'dataparaelmodal': 'nodata'
      },
      initialBreakpoint: 0.85,
      breakpoints: [0.55, 0.65, 0.75, 0.85, 0.95],
    });
    modal.onDidDismiss().then((data) => {
      console.log('data', data);
    });


    return await modal.present();
  }




}
