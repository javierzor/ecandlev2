import { Component, OnInit } from '@angular/core';
import { IonText, IonContent } from "@ionic/angular/standalone";
import { StorageService } from 'src/app/services/storage.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-animaciontrescomp',
  templateUrl: './animaciontrescomp.component.html',
  styleUrls: ['./animaciontrescomp.component.scss'],
  imports: [CommonModule], // Add IonContent to imports

})
export class AnimaciontrescompComponent  implements OnInit {

  constructor( public storageService: StorageService) { 



    
  }

  ngOnInit() {


    
  }

  getLinearGradientBackground(): string {
    const baseColor = this.storageService.data['secondaryColor'] || '#ff4e50';
    const lighter = this.adjustColorBrightness(baseColor, 20);
    const darker = this.adjustColorBrightness(baseColor, -30);
    return `linear-gradient(135deg, ${lighter}, ${darker})`;
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



}
