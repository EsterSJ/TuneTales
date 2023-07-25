import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AddMusicComponent } from './pages/add-music/add-music.component';
import { AddMusicFormComponent } from './components/add-music-form/add-music-form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { EditProfileComponent } from './pages/edit-profile/edit-profile.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddMusicComponent,
    AddMusicFormComponent,
    EditProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
