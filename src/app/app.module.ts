import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TarjetaEventoPerfilComponent } from './components/tarjeta-evento-perfil/tarjeta-evento-perfil.component';

@NgModule({
  declarations: [
    AppComponent,
    TarjetaEventoPerfilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
