import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-animacioncincocomp',
  templateUrl: './animacioncincocomp.component.html',
  styleUrls: ['./animacioncincocomp.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class AnimacioncincocompComponent implements OnInit {
  particles: { top: string, left: string, delay: string, size: string, opacity: string }[] = [];
  confettis: { left: string; delay: string; duration: string; color: string }[] = [];

  constructor(public storageService: StorageService) {}

  ngOnInit() {
    this.generateParticles(480);
    this.generateConfetti(60);

    const root = document.documentElement;
    root.style.setProperty('--fillColor', this.getPrimaryColor());
  }

  getPrimaryColor(): string {
    return this.storageService.data['primaryColor'] || '#ffffff';
  }

  getSecondaryColor(): string {
    return this.storageService.data['secondaryColor'] || '#ff4081';
  }

  getGlow(): string {
    return `0 0 12px ${this.getPrimaryColor()}, 0 0 28px ${this.getSecondaryColor()}`;
  }

  getBackground(): string {
    const base = this.getSecondaryColor();
    return `radial-gradient(circle at center, ${base} 0%, #000 100%)`;
  }

  generateParticles(count: number) {
    this.particles = [];
    for (let i = 0; i < count; i++) {
      this.particles.push({
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        delay: `${Math.random() * 3}s`,
        size: `${3 + Math.random() * 4}px`,
        opacity: `${0.3 + Math.random() * 0.5}`
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

  generateConfetti(count: number) {
    const base = this.getPrimaryColor();
    this.confettis = Array.from({ length: count }, () => {
      const variation = Math.floor(Math.random() * 60) - 30;
      const adjustedColor = this.adjustColorBrightness(base, variation);

      return {
        left: `${Math.random() * 100}%`,
        delay: `${Math.random() * 5}s`,
        duration: `${1.5 + Math.random()}s`,
        color: adjustedColor
      };
    });
  }
}
