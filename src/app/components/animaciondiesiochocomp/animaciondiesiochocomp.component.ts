import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';
@Component({
  selector: 'app-animaciondiesiochocomp',
  templateUrl: './animaciondiesiochocomp.component.html',
  styleUrls: ['./animaciondiesiochocomp.component.scss'],
})
export class AnimaciondiesiochocompComponent implements OnInit {
  videoSrc = 'assets/videosdefondo/18.mp4'; // ← Cambia según la animación seleccionada
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
