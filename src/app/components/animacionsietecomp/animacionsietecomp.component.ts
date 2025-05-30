import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, NgZone } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-animacionsietecomp',
  standalone: true,
  templateUrl: './animacionsietecomp.component.html',
  styleUrls: ['./animacionsietecomp.component.scss'],

})
export class AnimacionsietecompComponent implements OnInit {
  @ViewChild('bgVideo', { static: false }) bgVideoRef!: ElementRef<HTMLVideoElement>;

  videoSrc = '';
  age = '';
  birthdayText = '';
  name = '';

  private interactionHandler: () => void;

  constructor(public storageService: StorageService, private zone: NgZone) { }

  ngOnInit(): void {
    const id = this.storageService.data['animacion_seleccionada'] || '1';
    this.videoSrc = `assets/videosdefondo/7.mp4`;

    this.age = this.storageService.data['Age'] || '00';
    this.birthdayText = this.storageService.data['birthdayText'] || 'Feliz Cumpleaños';
    this.name = this.storageService.data['cached_nombre_del_que_cumple'] || 'Invitado';
  }

  ngAfterViewInit(): void {
    const videoEl = this.bgVideoRef.nativeElement;

    // Intenta reproducir cuando el video está listo
    videoEl.addEventListener('canplay', () => {
      videoEl.play().catch(err => {
        console.warn('Autoplay bloqueado por el navegador:', err);
        this.setupInteractionFallback(videoEl);
      });
    });

    // Fallback por si canplay no se dispara
    setTimeout(() => {
      if (videoEl.paused) {
        this.setupInteractionFallback(videoEl);
      }
    }, 1500);
  }

  setupInteractionFallback(videoEl: HTMLVideoElement) {
    if (this.interactionHandler) return;

    this.interactionHandler = () => {
      videoEl.play().then(() => {
        console.log('🎬 Reproducción iniciada tras interacción');
        this.removeInteractionListeners();
      }).catch(err => {
        console.warn('❌ No se pudo reproducir tras interacción:', err);
      });
    };

    const events = ['click', 'touchstart', 'pointerdown', 'mousedown', 'keydown', 'wheel'];
    events.forEach(evt => {
      window.addEventListener(evt, this.interactionHandler, true);
    });
  }

  removeInteractionListeners() {
    const events = ['click', 'touchstart', 'pointerdown', 'mousedown', 'keydown', 'wheel'];
    events.forEach(evt => {
      window.removeEventListener(evt, this.interactionHandler, true);
    });
  }


  playVideo() {
    const videoEl = this.bgVideoRef?.nativeElement;
    if (videoEl && videoEl.paused) {
      videoEl.play().catch(err => {
        console.warn('Reproducción fallida al hacer clic:', err);
      });
    }
  }


}
