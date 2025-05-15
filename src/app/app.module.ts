import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { ScreenOrientation } from '@awesome-cordova-plugins/screen-orientation/ngx'; // ✅ Correcto
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [AppComponent],
  imports: [    BrowserModule,
    IonicModule.forRoot(),
    CommonModule, // <-- esto permite usar *ngIf

    AppRoutingModule
],
providers: [
  { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  ScreenOrientation,
   // ✅ Aquí debe ir solo, en su propia línea
],
  bootstrap: [AppComponent],
})
export class AppModule {}
