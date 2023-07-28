import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
<<<<<<< HEAD
import { EventsComponent } from './pages/events/events.component';

const routes: Routes = [
  {path:'', component:EventsComponent},
=======
import { LoginComponent } from '../../src/app/pages/login/login.component';
import { CreateEventComponent } from './pages/create-event/create-event.component';
import { HomeComponent } from './pages/home/home.component';
import { AddMusicComponent } from './pages/add-music/add-music.component';
import { EditProfileComponent } from './pages/edit-profile/edit-profile.component';
import { ForYouComponent } from './pages/for-you/for-you.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { CommunityComponent } from './pages/community/community.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'create-event', component: CreateEventComponent },
  { path: 'login', component: LoginComponent },
  // { path: '', redirectTo: '/login', pathMatch: 'full' }, 
>>>>>>> 2be2e0fc200664402b1fdfdced91ef27de8e0a9c
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
