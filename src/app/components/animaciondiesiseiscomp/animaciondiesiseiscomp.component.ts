import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';
@Component({
  selector: 'app-animaciondiesiseiscomp',
  templateUrl: './animaciondiesiseiscomp.component.html',
  styleUrls: ['./animaciondiesiseiscomp.component.scss'],
})
export class AnimaciondiesiseiscompComponent implements OnInit {

  videoSrc = 'assets/videosdefondo/6.mp4'; // ← Cambia según la animación seleccionada
  age = '';
  birthdayText = '';
  name = '';

  constructor(public storageService: StorageService) { }

  ngOnInit(): void {
    this.age = this.storageService.data['Age'] || '18';
    this.birthdayText = this.storageService.data['birthdayText'] || 'Feliz Cumpleaños';
    this.name = this.storageService.data['cached_nombre_del_que_cumple'] || '';
  }


}
