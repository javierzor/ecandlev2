import { Component, OnInit } from '@angular/core';
import { LoadingController, ModalController } from '@ionic/angular';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-modalchangefont',
  templateUrl: './modalchangefont.page.html',
  styleUrls: ['./modalchangefont.page.scss'],
  standalone: false,
})
export class ModalchangefontPage implements OnInit {
  seleccionada = localStorage.getItem('cached_font_family') || 'uno';
  scrollThumbHeight = 0;
  scrollThumbTop = 0;

  allFonts: string[] = []; // todas las fuentes disponibles
  displayedFonts: string[] = []; // las que ya se renderizan
  batchSize = 10; // cuántas se cargan por lote
  currentIndex = 0; // control de hasta dónde cargamos

  constructor(
    public storageService: StorageService,
    private modalController: ModalController,
    private loadingCtrl: LoadingController
  ) { }

  async ngOnInit() {
    // 🔹 Generamos dinámicamente todas las fuentes (ejemplo hasta 42, pero escalable)
    this.allFonts = [
      'uno', 'dos', 'tres', 'cuatro', 'cinco',
      'seis', 'siete', 'ocho', 'nueve', 'diez',
      'once', 'doce', 'trece', 'catorce', 'quince',
      'dieciseis', 'diecisiete', 'dieciocho', 'diecinueve', 'veinte',
      'veintiuno', 'veintidos', 'veintitres', 'veinticuatro', 'veinticinco',
      'veintiseis', 'veintisiete', 'veintiocho', 'veintinueve', 'treinta',
      'treintayuno', 'treintaydos', 'treintaytres', 'treintaycuatro', 'treintaycinco',
      'treintayseis', 'treintaysiete', 'treintayocho', 'treintaynueve', 'cuarenta',
      'cuarentayuno', 'cuarentaydos',
      'cuarentaytres', 'cuarentaycuatro', 'cuarentaycinco', 'cuarentayseis', 'cuarentaysiete'
    ];
    const loading = await this.loadingCtrl.create({
      message: 'Cargando fuentes por favor espere...',
    });
    await loading.present();

    // 🔹 Cargar primer lote después de un pequeño delay para que se vea el spinner
    setTimeout(() => {
      this.loadMoreFonts();
      loading.dismiss();
    }, 600);
  }

  async loadMoreFonts() {
    const loading = await this.loadingCtrl.create({
      message: 'Cargando fuentes por favor espere...',
    });
    await loading.present();



    const nextBatch = this.allFonts.slice(this.currentIndex, this.currentIndex + this.batchSize);
    this.displayedFonts = [...this.displayedFonts, ...nextBatch];
    this.currentIndex += this.batchSize;

    setTimeout(() => {
      loading.dismiss();
    }, 1300);

  }

  seleccionar_fuente(numero: string) {
    this.seleccionada = numero;
    localStorage.setItem('cached_font_family', numero);
    setTimeout(() => {
      this.closeModal();
    }, 300);
  }

  closeModal() {
    this.modalController.dismiss({});
  }

  syncScroll(event: any) {
    const el = event.target;
    this.scrollThumbHeight = (el.clientHeight / el.scrollHeight) * 100;
    this.scrollThumbTop = (el.scrollTop / el.scrollHeight) * 100;
  }
}
