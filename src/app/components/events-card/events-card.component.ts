import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Evento } from 'src/app/models/evento';



@Component({
  selector: 'app-events-card',
  templateUrl: './events-card.component.html',
  styleUrls: ['./events-card.component.css']
})
export class EventsCardComponent {
  @Input() evento: Evento;
}
