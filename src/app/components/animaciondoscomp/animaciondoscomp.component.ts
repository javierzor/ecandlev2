import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';
@Component({
  
  selector: 'app-animaciondoscomp',
  templateUrl: './animaciondoscomp.component.html',
  styleUrls: ['./animaciondoscomp.component.scss'],
})


export class AnimaciondoscompComponent  implements OnInit {

   videoSrc = 'assets/videosdefondo/2.mp4'; // ← Cambia según la animación seleccionada
  age = '';
  birthdayText = '';
  name = '';

  constructor(public storageService: StorageService) {}

  ngOnInit(): void {
    this.age = this.storageService.data['Age'] || '00';
    this.birthdayText = this.storageService.data['birthdayText'] || 'Feliz Cumpleaños';
    this.name = this.storageService.data['cached_nombre_del_que_cumple'] || 'Invitado';
  }


}
