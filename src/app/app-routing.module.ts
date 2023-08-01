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

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'register', component:FormRegisterComponent},
  {path: 'paraTi', component:ForYouComponent},
  {path: 'login', component:LoginComponent},
  {path: 'events', component:EventsComponent},
  {path: 'editEvent', component:CreateEventComponent},
  {path: 'comunidad', component:CommunityComponent},
  {path: 'addMusic', component:AddMusicComponent},
  {path: 'editProfile', component:EditProfileComponent},
  {path: 'profile', component:ProfileComponent},
  {path: 'publicacion', component:PublicacionComponent},
  {path: 'myPlaylist', component:PlaylistComponent},
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
