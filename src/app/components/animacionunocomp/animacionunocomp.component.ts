import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-animacionunocomp',
  templateUrl: './animacionunocomp.component.html',
  styleUrls: ['./animacionunocomp.component.scss'],
    standalone: true

})
export class AnimacionunocompComponent implements OnInit {

  videoSrc = 'assets/videosdefondo/1.mp4'; // ← Cambia según la animación seleccionada
  age = '';
  birthdayText = '';
  name = '';

  constructor(public storageService: StorageService) {}

  ngOnInit(): void {
    this.age = this.storageService.data['Age'] || '0';
    this.birthdayText = this.storageService.data['birthdayText'] || 'Feliz Cumpleaños';
    this.name = this.storageService.data['cached_nombre_del_que_cumple'] || '';
  }


}
