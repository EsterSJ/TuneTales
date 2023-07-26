import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormRegisterComponent } from './pages/form-register/form-register.component'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventsCardComponent } from './components/events-card/events-card.component';
import { EventsComponent } from './pages/events/events.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    EventsCardComponent,
    FormRegisterComponent,
    EventsComponent
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
