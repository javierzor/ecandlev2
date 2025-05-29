import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-animacionsietecomp',
  standalone: true,
  templateUrl: './animacionsietecomp.component.html',
  styleUrls: ['./animacionsietecomp.component.scss'],
  imports: [CommonModule]

})
export class AnimacionsietecompComponent implements OnInit {
  @ViewChild('waveSVG') waveRef!: ElementRef;
  @ViewChild('waveSVG22') waveRef22!: ElementRef;

  age: string = '';
  birthdayText: string = '';
  name: string = '';
  primaryColor: string = '#ffffff';
  secondaryColor: string = '#ff4081';

  particles: { size: string; left: string; delay: string; color: string }[] = [];

  constructor(public storageService: StorageService) { }

  ngOnInit(): void {

    this.loadData();

    this.generateParticles(60);
  }


  loadData() {
    this.age = this.storageService.data['Age'] || '10';
    this.birthdayText = this.storageService.data['birthdayText'] || 'Feliz Cumpleaños';
    this.name = this.storageService.data['cached_nombre_del_que_cumple'] || '';
    this.primaryColor = this.storageService.data['primaryColor'] || '#FFD700';
    this.secondaryColor = this.storageService.data['secondaryColor'] || '#FFFFFF';

    // Registrar secondaryColor como variable CSS para el fondo
    const root = document.documentElement;
    root.style.setProperty('--secondaryColor', this.secondaryColor);

    this.generateParticles(60);
  }

  ngAfterViewInit() {
    this.ponerfillaginaldas(); // Ahora es seguro
  }

  ionViewWillEnter() {

    this.secondaryColor = this.storageService.data['secondaryColor'] || '#FFFFFF';

    // ✅ Aplica secondaryColor como variable CSS para usar en animación
    const root = document.documentElement;
    root.style.setProperty('--secondaryColor', this.secondaryColor);

    this.generateParticles(60);

  }

  ponerfillaginaldas() {
    if (this.waveRef) {
      this.waveRef.nativeElement.setAttribute('fill', this.storageService.data['primaryColor']);
      this.waveRef22.nativeElement.setAttribute('fill', this.storageService.data['primaryColor']);

    }
  }

  generateParticles(count: number) {
    const colors = [this.secondaryColor, '#ffffff', '#cccccc', '#f5f5dc'];
    for (let i = 0; i < count; i++) {
      this.particles.push({
        size: `${4 + Math.random() * 12}px`,
        left: `${Math.random() * 100}%`,
        delay: `${Math.random() * 10}s`,
        color: colors[Math.floor(Math.random() * colors.length)]
      });
    }
  }

  adjustColorBrightness(hex: string, percent: number): string {
    if (!hex.startsWith('#')) return hex;
    let r = parseInt(hex.slice(1, 3), 16);
    let g = parseInt(hex.slice(3, 5), 16);
    let b = parseInt(hex.slice(5, 7), 16);

    r = Math.min(255, Math.max(0, r + (r * percent) / 100));
    g = Math.min(255, Math.max(0, g + (g * percent) / 100));
    b = Math.min(255, Math.max(0, b + (b * percent) / 100));

    return `rgb(${Math.round(r)}, ${Math.round(g)}, ${Math.round(b)})`;
  }

  getColor1() { return this.primaryColor; } // base
  getColor2() { return this.adjustColorBrightness(this.primaryColor, -30); } // sombra
  getColor3() { return this.adjustColorBrightness(this.primaryColor, 40); }  // brillo


}
