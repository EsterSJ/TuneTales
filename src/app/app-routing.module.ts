import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AddMusicComponent } from './pages/add-music/add-music.component';
import { EditProfileComponent } from './pages/edit-profile/edit-profile.component';
import { ForYouComponent } from './pages/for-you/for-you.component';

const routes: Routes = [
  // {path: '', component: HomeComponent}
  {path: '', component: AddMusicComponent}
  // {path: '', component: EditProfileComponent}
  // {path: '', component: ForYouComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
