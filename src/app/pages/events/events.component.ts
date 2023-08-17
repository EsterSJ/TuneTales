import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { EventsService } from 'src/app/shared/events.service';
import { Evento } from 'src/app/models/evento';


@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent {
  public eventos;
  
  constructor (public http: HttpClient, public eventService: EventsService){}

  ngOnInit() {
    this.eventService.getAllEvent().subscribe(data => {
      this.eventos = data;
    });
    
  }
}

