import { Injectable } from '@angular/core';
import { Preferences } from '@capacitor/preferences';
import { Share } from '@capacitor/share';
import { AlertController } from '@ionic/angular';
import { Filesystem, Directory } from '@capacitor/filesystem';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  public data: { [key: string]: any } = {};
  private isSharing = false;
  esta_en_paso3_o_paso4: string;
  zoom_especial_en_vista: number = 1;

  constructor(
    public alertController: AlertController

  ) {

  }

  loadCache() {

    const lang_siglas = localStorage.getItem('language');
    const ageStr = localStorage.getItem('realAge') || '0';
    const age = parseInt(ageStr, 10);

    // Aplica la máscara si corresponde
    let maskedAge = ageStr;
    const maskType = localStorage.getItem('maskType') || '';

    if (age >= 10 && age < 100) {
      if (maskType === 'hide-decade') {
        maskedAge = '?' + ageStr[1];
      } else if (maskType === 'hide-unit') {
        maskedAge = ageStr[0] + '?';
      }
    }

    // Define el texto de cumpleaños según idioma
    const language = localStorage.getItem('language') || 'es';
    const birthdayText = language === 'en' ? 'Happy Birthday' : 'Feliz Cumpleaños';

    const cached_shower_meses = localStorage.getItem('cached_shower_meses') || '1';


    this.data = {
      lang_siglas: lang_siglas,
      Age: maskedAge,
      maskType: maskType,
      language: language,
      backgroundColor: localStorage.getItem('backgroundColor') || '',
      primaryColor: localStorage.getItem('primaryColor') || '',
      secondaryColor: localStorage.getItem('secondaryColor') || '',
      cached_ocultar_nombre: localStorage.getItem('cached_ocultar_nombre') || '',
      cached_nombre_del_que_cumple: localStorage.getItem('cached_nombre_del_que_cumple') || '',
      animacion_seleccionada: localStorage.getItem('animacion_seleccionada') || '',
      birthdayText: birthdayText, // <-- agregado
      realAge: ageStr, // <-- opcional si necesitas mostrar la original,
      font_family_dinamico: localStorage.getItem('cached_font_family') || 'uno',
      font_color_dinamico: localStorage.getItem('cached_font_color') || '#330000',
      cached_shower_meses: cached_shower_meses, // <-- opcional si necesitas mostrar la original,
      zoom_en_services: localStorage.getItem('zoom_en_services') || 1,
    };

    if (age < 1) {

      if (localStorage.getItem('language') === 'en') {
        this.data['birthdayText'] = 'Congratulations';
        this.data['palabra_mes'] = 'Month';


      }
      else {
        this.data['birthdayText'] = 'Felicidades';
        this.data['palabra_mes'] = 'Mes';

      }

    }

  }


  async set(key: string, value: any): Promise<void> {
    await Preferences.set({
      key,
      value: JSON.stringify(value),
    });
  }

  async get<T>(key: string): Promise<T | null> {
    const { value } = await Preferences.get({ key });
    return value ? JSON.parse(value) : null;
  }

  async remove(key: string): Promise<void> {
    await Preferences.remove({ key });
  }

  async clear(): Promise<void> {
    await Preferences.clear();
  }

  async getAll(): Promise<{ [key: string]: any }> {
    const { keys } = await Preferences.keys();
    const data: { [key: string]: any } = {};
    for (const key of keys) {
      data[key] = await this.get(key);
    }
    return data;
  }


  async compartir() {
    const alert = await this.alertController.create({
      header: '¡Compartir!',
      subHeader: 'Comparte la aplicación',
      cssClass: 'cerrarsalir-alert',
      buttons: [
        {
          text: 'Cancelar',
          cssClass: 'alert-button-cancel',
        },
        {
          text: 'Compartir',
          cssClass: 'alert-button-confirm',
          handler: async () => {
            this.isSharing = true;

            try {
              // 1. Cargar imagen desde assets
              const response = await fetch('assets/qrcompartir.png');
              const blob = await response.blob();

              // 2. Convertir a base64 (sin el encabezado data:image/png;base64,)
              const base64Data = await this.convertBlobToBase64(blob);

              // 3. Guardar archivo en caché temporal
              const fileName = 'qrcompartir.png';
              const savedFile = await Filesystem.writeFile({
                path: fileName,
                data: base64Data,
                directory: Directory.Cache,
              });

              // 4. Compartir texto + imagen
              await Share.share({
                title: 'Comparte nuestra app',
                text: 'Escanea el código QR o descarga desde: https://play.google.com/store/apps/details?id=com.ecandle.app',
                files: [savedFile.uri],
              });

            } catch (error) {
              console.error('Error al compartir imagen y texto:', error);
            }

            this.isSharing = false;
          },
        },
      ],
    });

    await alert.present();
  }

  // Función para convertir Blob a base64 sin encabezado
  private convertBlobToBase64(blob: Blob): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onerror = reject;
      reader.onload = () => {
        const base64 = (reader.result as string).split(',')[1]; // quitamos encabezado data:image/png;base64,
        resolve(base64);
      };
      reader.readAsDataURL(blob);
    });
  }


  subirzoom() {
  
    this.zoom_especial_en_vista=this.zoom_especial_en_vista+0.02;
    // this.storageService.data['zoom_en_services'] = this.storageService.data['zoom_en_services'] - 0.1;
  }



  bajarzoom() {
    this.zoom_especial_en_vista=this.zoom_especial_en_vista-0.02;

  }

}
