import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, IonCheckbox, IonContent } from '@ionic/angular';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-step2',
  templateUrl: './step2.page.html',
  styleUrls: ['./step2.page.scss'],
  standalone: false
})
export class Step2Page {
  @ViewChild(IonContent, { static: true, read: ElementRef }) content!: ElementRef;

  popularColors = ['#FF5733', '#33C1FF', '#FFD700', '#8E44AD', '#28B463', '#F39C12', '#1ABC9C', '#E74C3C'];

  selectedBackground: string = '';
  selectedPrimary: string = '';
  selectedSecondary: string = '';

  mostrarNombre: boolean = false;
  nombre_del_que_cumple: string = '';

  constructor(private router: Router, private alertController: AlertController, public storageService: StorageService) { }

  ngAfterViewInit() {
    const observer = new MutationObserver((mutations) => {
      console.log('Cambios detectados en el contenido:', mutations);
      this.vercambios();
    });

    observer.observe(this.content.nativeElement, {
      childList: true,
      subtree: true,
      attributes: true
    });
  }

  ionViewWillEnter() {
    this.storageService.loadCache();

    const here_cached_ocultar_nombre = localStorage.getItem('cached_ocultar_nombre');
    // this.mostrarNombre = savedValue === 'si';
    if (here_cached_ocultar_nombre === 'si') {

      this.mostrarNombre = false;


    }
    else {
      console.log('this.storageService.data["Age"] ', this.storageService.data['Age'])
      if (this.storageService.data['Age'] < 1) {
        this.mostrarNombre = false;

      } else {
        this.mostrarNombre = true;

      }



    }

    const cachedName = localStorage.getItem('cached_nombre_del_que_cumple');
    if (cachedName) {
      this.nombre_del_que_cumple = cachedName;
    }

    // Restaurar colores guardados si existen
    const bgColor = localStorage.getItem('backgroundColor');
    const primary = localStorage.getItem('primaryColor');
    const secondary = localStorage.getItem('secondaryColor');

    if (bgColor) this.selectedBackground = bgColor;
    if (primary) this.selectedPrimary = primary;
    if (secondary) this.selectedSecondary = secondary;
  }


  selectColor(type: 'background' | 'primary' | 'secondary', color: string) {
    if (type === 'background') this.selectedBackground = color;
    if (type === 'primary') this.selectedPrimary = color;
    if (type === 'secondary') this.selectedSecondary = color;

    // Guardar inmediatamente en localStorage al seleccionar un color
    localStorage.setItem('backgroundColor', this.selectedBackground);
    localStorage.setItem('primaryColor', this.selectedPrimary);
    localStorage.setItem('secondaryColor', this.selectedSecondary);

    // También puedes llamar vercambios si quieres detectar la acción
    this.vercambios();
  }

  goToStep3() {
    localStorage.setItem('backgroundColor', this.selectedBackground);
    localStorage.setItem('primaryColor', this.selectedPrimary);
    localStorage.setItem('secondaryColor', this.selectedSecondary);
    this.togglenuevo();
    this.cambio_nombre();
    this.router.navigate(['/step3']);
  }

  goBack() {
    localStorage.setItem('backgroundColor', this.selectedBackground);
    localStorage.setItem('primaryColor', this.selectedPrimary);
    localStorage.setItem('secondaryColor', this.selectedSecondary);
    this.router.navigate(['/home']);
  }

  async onCheckboxClicked(event: Event) {

    const alert = await this.alertController.create({
      header: 'Ingrese el nombre',
      inputs: [
        {
          name: 'nombre',
          type: 'text',
          placeholder: 'Nombre del cumpleañero',
          attributes: {
            minlength: 3,
            maxlength: 11
          }
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        },
        {
          text: 'Aceptar',
          handler: (data) => {
            const nombre = data.nombre?.trim();
            const longitud = nombre?.length || 0;

            if (longitud >= 3 && longitud <= 11) {
              this.nombre_del_que_cumple = nombre;
              this.mostrarNombre = true;
              localStorage.setItem('cached_ocultar_nombre', 'no');
              localStorage.setItem('cached_nombre_del_que_cumple', nombre);
              return true; // permite cerrar el alert
            } else {
              // No cerrar el alert si el nombre es inválido
              return false;
            }
          }
        }
      ]
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('role', role);

    // Si se canceló o cerró el alert sin aceptar, aseguramos que no quede marcado
    if (role === 'cancel' || role === 'backdrop') {
      this.mostrarNombre = false;
      localStorage.setItem('cached_ocultar_nombre', 'si');
      this.nombre_del_que_cumple = '';
      // this.check_en_html.checked = false;


    }

  }

  vercambios() {
    console.log('asd');
  }

  se_clickeo_check(event) {
    console.log('event', event);
    if (event && event.detail.checked == false) {
      console.log('no abras alerta, solo descheckea');

      this.mostrarNombre = false;
      localStorage.setItem('cached_ocultar_nombre', 'si');
      this.nombre_del_que_cumple = '';

      // this.check_en_html['checked']=false;
      // console.log('this.check_en_html',this.check_en_html);
    }
    else {
      console.log('abre alerta');
      this.onCheckboxClicked(event);
    }

  }

  togglenuevo() {
    if (this.mostrarNombre) {

      localStorage.setItem('cached_ocultar_nombre', 'no');
    }
    else {
      localStorage.setItem('cached_ocultar_nombre', 'si');
    }

  }

  cambio_nombre() {
    var nombre = this.nombre_del_que_cumple;
    const longitud = nombre?.length || 0;

    if (longitud >= 3 && longitud <= 11) {
      this.nombre_del_que_cumple = nombre;
      this.mostrarNombre = true;
      localStorage.setItem('cached_ocultar_nombre', 'no');
      localStorage.setItem('cached_nombre_del_que_cumple', nombre);

    

    }
  
    else{
      localStorage.setItem('cached_nombre_del_que_cumple', '');
      localStorage.setItem('cached_ocultar_nombre', 'si');

  }




  }

}
