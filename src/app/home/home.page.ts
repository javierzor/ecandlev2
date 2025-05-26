import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
  selectedAge: number = 0;
  realAge: number = 0;
  ageFormat: 'full' | 'hide-unit' | 'hide-decade' = 'full';
  maskType: 'none' | 'hide-decade' | 'hide-unit' = 'none';

  ages: number[] = [];
  selectedLanguage: string = 'es'; // predeterminado
  languages = [
    { code: 'es', label: 'Español' },
    { code: 'en', label: 'Inglés' },
  ];

  constructor(private router: Router,  public storageService: StorageService) {
    this.populateAges();

    // ✅ Leer edad real (no enmascarada)
    const cachedAge = localStorage.getItem('realAge');
    this.selectedAge = cachedAge ? parseInt(cachedAge) : 0;
    this.realAge = this.selectedAge;

    // ✅ Leer idioma o usar 'es'
    const cachedLang = localStorage.getItem('language');
    this.selectedLanguage = cachedLang || 'es';

    // ✅ Leer máscara si existe
    const cachedMask = localStorage.getItem('maskType');
    if (cachedMask) this.maskType = cachedMask as any;
  }

  populateAges() {
    this.ages = Array.from({ length: 100 }, (_, i) => i);
  }

  increaseAge() {
    const currentIndex = this.ages.indexOf(this.selectedAge);
    if (currentIndex < this.ages.length - 1) {
      this.selectedAge = this.ages[currentIndex + 1];
      this.realAge = this.selectedAge;
      this.saveAgeToCache();
    }
  }

  decreaseAge() {
    const currentIndex = this.ages.indexOf(this.selectedAge);
    if (currentIndex > 0) {
      this.selectedAge = this.ages[currentIndex - 1];
      this.realAge = this.selectedAge;
      this.saveAgeToCache();
    }
  }

  onAgeChange() {
    this.realAge = this.selectedAge;
    this.saveAgeToCache();
  }

  saveAgeToCache() {
    localStorage.setItem('realAge', this.realAge.toString());
  }

  selectLanguage(code: string) {
    this.selectedLanguage = code;
    localStorage.setItem('language', code);
  }

  updateMaskedAge() {
    localStorage.setItem('maskType', this.maskType);
  }

  getMaskedAge(mask: 'none' | 'hide-decade' | 'hide-unit'): string {
    const age = this.realAge;
    if (mask === 'hide-decade') {
      return '?' + (age % 10); // 42 → #2
    } else if (mask === 'hide-unit') {
      return Math.floor(age / 10).toString() + '?'; // 42 → 4#
    }
    return age.toString(); // Mostrar completo
  }

  goToStep2() {
    localStorage.setItem('maskType', this.maskType);
    localStorage.setItem('language', this.selectedLanguage);
    localStorage.setItem('realAge', this.realAge.toString());

    // ya no es necesario guardar realAge aquí porque se guarda automáticamente al cambiar
    this.router.navigate(['/step2']);
  }
}
