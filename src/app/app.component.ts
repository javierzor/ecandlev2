import { Component } from '@angular/core';
import { StorageService } from './services/storage.service';
import { ScreenOrientation } from '@awesome-cordova-plugins/screen-orientation/ngx';
import { Capacitor } from '@capacitor/core';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {
  constructor(public storageService: StorageService,
    private screenOrientation: ScreenOrientation,
    private platform: Platform,

  ) {
    this.bloquearLandscape();

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

  cambio_la_app() {
    this.storageService.loadCache();
    console.log('Cache cargado  component cambio la app:', this.storageService.data);
  }


}
