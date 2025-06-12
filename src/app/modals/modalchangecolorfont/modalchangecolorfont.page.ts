import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-modalchangecolorfont',
  templateUrl: './modalchangecolorfont.page.html',
  styleUrls: ['./modalchangecolorfont.page.scss'],
    standalone:false,

})
export class ModalchangecolorfontPage implements OnInit {

 seleccionada = localStorage.getItem('cached_font_color') || '#330000';

  constructor(    public storageService: StorageService,
        private modalController: ModalController,

  ) { }

  ngOnInit(): void {

  }

  seleccionar_fuente(numero){
    this.seleccionada = numero;
    localStorage.setItem('cached_font_color', numero);
    setTimeout(() => {
      this.closeModal()
    }, 300);
  }

  // Función para cerrar el modal
  closeModal() {
    this.modalController.dismiss({

    });
  }
  

  //   seleccionar_animacion(numero: string) {

  // }


setColor(colorselected){
  console.log('color',colorselected);
    this.seleccionada = colorselected;
    localStorage.setItem('cached_font_color', colorselected);
    setTimeout(() => {
      this.closeModal()
    }, 300);

  
}

}
