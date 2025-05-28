import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-animacionunocomp',
  templateUrl: './animacionunocomp.component.html',
  styleUrls: ['./animacionunocomp.component.scss'],
})
export class AnimacionunocompComponent implements OnInit {

  constructor(public storageService: StorageService
  ) { }

  ngOnInit() { }

  // birthday-landing.component.ts
  getRadialGradientBackground(): string {
    const baseColor = this.storageService.data['secondaryColor'] || '#ffb6c1';
    const shadeColor = this.adjustColorBrightness(baseColor, -40); // 20% más oscuro
    return `radial-gradient(circle, ${baseColor} 0%, ${shadeColor} 100%)`;
  }

  // Helper: ajusta el brillo del color en base a porcentaje
  adjustColorBrightness(hex: string, percent: number): string {
    let r = parseInt(hex.substring(1, 3), 16);
    let g = parseInt(hex.substring(3, 5), 16);
    let b = parseInt(hex.substring(5, 7), 16);

    r = Math.min(255, Math.max(0, r + (r * percent) / 100));
    g = Math.min(255, Math.max(0, g + (g * percent) / 100));
    b = Math.min(255, Math.max(0, b + (b * percent) / 100));

    return `rgb(${Math.round(r)}, ${Math.round(g)}, ${Math.round(b)})`;
  }




}
