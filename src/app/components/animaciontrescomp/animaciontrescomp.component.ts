import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';
@Component({
  selector: 'app-animaciontrescomp',
  templateUrl: './animaciontrescomp.component.html',
  styleUrls: ['./animaciontrescomp.component.scss'],

})
export class AnimaciontrescompComponent  implements OnInit {

    videoSrc = 'assets/videosdefondo/3.mp4'; // ← Cambia según la animación seleccionada
  age = '';
  birthdayText = '';
  name = '';

  constructor(public storageService: StorageService) {}

  ngOnInit(): void {
    this.age = this.storageService.data['Age'] || '18';
    this.birthdayText = this.storageService.data['birthdayText'] || 'Feliz Cumpleaños';
    this.name = this.storageService.data['cached_nombre_del_que_cumple'] || 'Amig@';
  }


}
