import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
//IMPORTAR LOS CAMPONENTES Y MODULOS
import { HeroeModule } from './heroes/heroe.module';
import { ContadorModule } from './contador/contador.module';



@NgModule({
  declarations: [
    AppComponent
  ],
  //importar modulos
  imports: [
    BrowserModule,
    HeroeModule, 
    ContadorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
