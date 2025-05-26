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

  }


  cambio_la_app() {
    this.storageService.loadCache();
    console.log('Cache cargado  component cambio la app:', this.storageService.data);
  }


}
