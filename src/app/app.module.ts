import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormRegisterComponent } from './components/form-register/form-register.component'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventsCardComponent } from './components/events-card/events-card.component';

@NgModule({
  declarations: [
    AppComponent,
    EventsCardComponent,
    FormRegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
