import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../../src/app/pages/login/login.component';
import { CreateEventComponent } from './pages/create-event/create-event.component';
import { HomeComponent } from './pages/home/home.component';
import { AddMusicComponent } from './pages/add-music/add-music.component';
import { EditProfileComponent } from './pages/edit-profile/edit-profile.component';
import { ForYouComponent } from './pages/for-you/for-you.component';
import { ProfileComponent } from './pages/profile/profile.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'create-event', component: CreateEventComponent },
  { path: 'login', component: LoginComponent },
  // { path: '', redirectTo: '/login', pathMatch: 'full' }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
