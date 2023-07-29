import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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

const routes: Routes = [
  { path: '', component: FormRegisterComponent },
  { path: 'register', component: FormRegisterComponent },
  { path: 'create-event', component: CreateEventComponent },
  { path: 'login', component: LoginComponent },
  { path: 'paraTi', component: ForYouComponent },
  { path: 'addMusic', component: AddMusicComponent },
  { path: 'community', component: CommunityComponent },
  { path: 'edit-profile', component: EditProfileComponent },
  { path: 'events', component: EventsComponent },
  { path: 'profile', component: ProfileComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
