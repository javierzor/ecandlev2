import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-modalchangefont',
  templateUrl: './modalchangefont.page.html',
  styleUrls: ['./modalchangefont.page.scss'],
  standalone:false,
})
export class ModalchangefontPage implements OnInit {
  seleccionada = localStorage.getItem('cached_font_family') || 'uno';

  constructor(    public storageService: StorageService,
        private modalController: ModalController,

  ) { }

  ngOnInit(): void {

  }

  seleccionar_fuente(numero){
    this.seleccionada = numero;
    localStorage.setItem('cached_font_family', numero);
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


}
