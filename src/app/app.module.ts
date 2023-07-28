import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormRegisterComponent } from './pages/form-register/form-register.component'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventsCardComponent } from './components/events-card/events-card.component';
import { EventsComponent } from './pages/events/events.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TarjetaEventoPerfilComponent } from './components/tarjeta-evento-perfil/tarjeta-evento-perfil.component';
import { LoginComponent } from './pages/login/login.component';
import { CreateEventComponent } from './pages/create-event/create-event.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    EventsCardComponent,
    FormRegisterComponent,
    EventsComponent,
    TarjetaEventoPerfilComponent,
    LoginComponent,
    CreateEventComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
