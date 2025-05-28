import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-animacionseiscomp',
  templateUrl: './animacionseiscomp.component.html',
  styleUrls: ['./animacionseiscomp.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class AnimacionseiscompComponent implements OnInit {

  constructor(public storageService: StorageService) { }

ngOnInit(): void {
  this.storageService.loadCache();

  // ✅ Establecer colores al iniciar
  const root = document.documentElement;
  const primary = this.storageService.data['primaryColor'];
  const secondary = this.storageService.data['secondaryColor'];

  console.log('primaryColor:', primary, 'secondaryColor:', secondary); // 🔍 DEBUG

  if (primary && secondary) {
    root.style.setProperty('--primary-color', primary);
    root.style.setProperty('--secondary-color', secondary);
  }

  // Efecto de fuegos artificiales
  setInterval(() => {
    const fireworks = document.querySelectorAll('.firework');
    fireworks.forEach(fw => {
      const angle = Math.random() * 2 * Math.PI;
      const distance = Math.random() * 120 + 40;
      const x = `${Math.cos(angle) * distance}px`;
      const y = `${Math.sin(angle) * distance}px`;

      const el = fw as HTMLElement;
      el.style.setProperty('--x', x);
      el.style.setProperty('--y', y);

      el.style.animation = 'none';
      void el.offsetWidth; // Trigger reflow
      el.style.animation = 'launch 0.5s ease-out, explode 1.5s ease-in-out 0.5s forwards';
    });
  }, 2000);
}

ionViewWillEnter(){
  
const root = document.documentElement;
const primary = this.storageService.data['primaryColor'];
const secondary = this.storageService.data['secondaryColor'];

if (primary && secondary) {
  root.style.setProperty('--primary-color', primary);
  root.style.setProperty('--secondary-color', secondary);
}
}

  getPrimaryColor(): string {
    return this.storageService.data['primaryColor'] || '#ff00ff';
  }

  getSecondaryColor(): string {
    return this.storageService.data['secondaryColor'] || '#000000';
  }

  getBackgroundGradient(): string {
    const base = this.getSecondaryColor();
    const lighter = this.adjustColorBrightness(base, 20);
    const darker = this.adjustColorBrightness(base, -30);
    return `linear-gradient(135deg, ${lighter}, ${darker})`;
  }

  getTextShadow(): string {
    const color = this.getPrimaryColor();
    return `
      1px 1px 0 rgba(0,0,0,0.2),
      2px 2px 0 rgba(0,0,0,0.2),
      3px 3px 0 rgba(0,0,0,0.15),
      4px 4px 0 rgba(0,0,0,0.1),
      0 0 20px ${color},
      0 0 40px ${color}
    `;
  }

  getFireworkColor(index: number): string {
    const hue = (index * 10 + Math.random() * 30) % 360;
    return `hsl(${hue}, 100%, 60%)`;
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
  getColorFilter(): string {
    const hex = this.getPrimaryColor(); // '#5c5c9c' por ejemplo
    return this.hexToCSSFilter(hex); // función que generas
  }


  // Solo para colores sólidos como filtros aproximados
  hexToCSSFilter(hex: string): string {
    // Aquí puedes hardcodear filtros por color si tienes 2 o 3 principales
    if (hex === '#5c5c9c') {
      return 'brightness(0) saturate(100%) invert(33%) sepia(9%) saturate(670%) hue-rotate(202deg) brightness(92%) contrast(85%)';
    }
    return 'none'; // fallback
  }


}
