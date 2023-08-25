import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from '../../src/app/pages/login/login.component';
import { CreateEventComponent } from './pages/create-event/create-event.component';
import { HomeComponent } from './pages/home/home.component';
import { FormRegisterComponent } from './pages/form-register/form-register.component';
import { ForYouComponent } from './pages/for-you/for-you.component';
import { AddMusicComponent } from './pages/add-music/add-music.component';
import { CommunityComponent } from './pages/community/community.component';
import { EditProfileComponent } from './pages/edit-profile/edit-profile.component';
import { EventsComponent } from './pages/events/events.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { PublicacionComponent } from './pages/publicacion/publicacion.component';
import { PlaylistComponent } from './pages/playlist/playlist.component';
import { TarjetaEventoPerfilComponent } from './components/tarjeta-evento-perfil/tarjeta-evento-perfil.component';
import { EventsCardComponent } from './components/events-card/events-card.component';
import { EditEventComponent } from './pages/edit-event/edit-event.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'register', component:FormRegisterComponent},
  {path: 'paraTi', component:ForYouComponent},
  {path: 'login', component:LoginComponent},
  {path: 'events', component:EventsComponent},
  {path: 'createEvent', component:CreateEventComponent},
  {path: 'comunidad', component:CommunityComponent},
  {path: 'addMusic', component:AddMusicComponent},
  {path: 'editProfile', component:EditProfileComponent},
  {path: 'profile', component:ProfileComponent},
  {path: 'publicacion/:id_publicacion', component:PublicacionComponent},
  {path: 'myPlaylist', component:PlaylistComponent},
  {path: 'tarjetaEvento', component:TarjetaEventoPerfilComponent},
  {path: 'EventsCard', component: EventsCardComponent},
  {path: 'editEvent/:id_evento', component: EditEventComponent}

]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
