import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventsCardComponent } from './components/events-card/events-card.component';
import { EventsComponent } from './pages/events/events.component';
import { TarjetaEventoPerfilComponent } from './components/tarjeta-evento-perfil/tarjeta-evento-perfil.component';
import { LoginComponent } from './pages/login/login.component'; 
import { CreateEventComponent } from './pages/create-event/create-event.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { AddMusicComponent } from './pages/add-music/add-music.component';
import { AddMusicFormComponent } from './components/add-music-form/add-music-form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { EditProfileComponent } from './pages/edit-profile/edit-profile.component';
import { ForYouComponent } from './pages/for-you/for-you.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { CommunityComponent } from './pages/community/community.component';
import { FormRegisterComponent } from './pages/form-register/form-register.component';
import { PublicacionComponent } from './pages/publicacion/publicacion.component';
import { PlaylistComponent } from './pages/playlist/playlist.component';
import { PubliCardComponent } from './components/publi-card/publi-card.component';
import { HttpClientModule } from '@angular/common/http';




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
    HeaderComponent,
    HomeComponent,
    AddMusicComponent,
    AddMusicFormComponent,
    EditProfileComponent,
    ForYouComponent,
    ProfileComponent,
    CommunityComponent,
    PublicacionComponent,
    PlaylistComponent,
    PubliCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
