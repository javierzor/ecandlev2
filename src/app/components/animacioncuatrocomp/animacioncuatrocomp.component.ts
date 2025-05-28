import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-animacioncuatrocomp',
  templateUrl: './animacioncuatrocomp.component.html',
  styleUrls: ['./animacioncuatrocomp.component.scss'],
  imports: [CommonModule], // Add IonContent to imports

})
export class AnimacioncuatrocompComponent implements OnInit {

  constructor(public storageService: StorageService, private router: Router, private navCtrl: NavController,

  ) { }

  ionViewWillEnter() {
    this.storageService.loadCache();

  }

  ngOnInit() { }


  goToStep3() {
    this.router.navigate([`home`]);

  }

  getLinearGradientBackground(): string {
  const base = this.storageService.data['secondaryColor'] || '#ff4e50';
  const lighter = this.adjustColorBrightness(base, 20);
  const darker = this.adjustColorBrightness(base, -30);
  return `linear-gradient(135deg, ${lighter}, ${darker})`;
}

getPrimaryTextColor(): string {
  return this.storageService.data['primaryColor'] || '#ffffff';
}

getPrimaryGlow(): string {
  const color = this.storageService.data['primaryColor'] || '#ffffff';
  return `0 0 20px ${color}, 0 0 40px ${color}`;
}

getRadialFlash(): string {
  const color = this.storageService.data['primaryColor'] || '#ffffff';
  return `radial-gradient(circle, ${color} 10%, transparent 60%)`;
}

getParticleColor(i: number): string {
  const base = this.storageService.data['primaryColor'] || '#ffffff';
  return this.adjustColorBrightness(base, (i % 2 === 0 ? 30 : -30));
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

hexToRgb(hex: string): { r: number; g: number; b: number } {
  hex = hex.replace('#', '');
  const bigint = parseInt(hex, 16);
  return {
    r: (bigint >> 16) & 255,
    g: (bigint >> 8) & 255,
    b: bigint & 255
  };
}

getLuminance(rgb: { r: number; g: number; b: number }): number {
  const a = [rgb.r, rgb.g, rgb.b].map(v => {
    v /= 255;
    return v <= 0.03928
      ? v / 12.92
      : Math.pow((v + 0.055) / 1.055, 2.4);
  });
  return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
}

getContrastRatio(c1: { r: number; g: number; b: number }, c2: { r: number; g: number; b: number }): number {
  const lum1 = this.getLuminance(c1);
  const lum2 = this.getLuminance(c2);
  const brightest = Math.max(lum1, lum2);
  const darkest = Math.min(lum1, lum2);
  return (brightest + 0.05) / (darkest + 0.05);
}


getTextStrokeShadow(): string {
  const primary = this.hexToRgb(this.storageService.data['primaryColor'] || '#ffffff');
  const secondary = this.hexToRgb(this.storageService.data['secondaryColor'] || '#000000');

  const contrast = this.getContrastRatio(primary, secondary);

  // Alto contraste → solo glow
  if (contrast > 4.5) {
    return this.getPrimaryGlow();
  }

  // Bajo contraste → agregar borde blanco o negro según luminancia
  const borderColor = this.getLuminance(primary) < 0.5 ? 'white' : 'black';

  return `
    2px 2px 4px ${borderColor},
    -2px -2px 4px ${borderColor},
    0 0 20px ${this.storageService.data['primaryColor'] || '#ffffff'},
    0 0 40px ${this.storageService.data['primaryColor'] || '#ffffff'}
  `;
}

}
