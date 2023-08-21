import { Component, EventEmitter, Input, Output } from '@angular/core';
import { EventsService } from 'src/app/shared/events.service';
import { Evento } from 'src/app/models/evento';

@Component({
  selector: 'app-tarjeta-evento-perfil',
  templateUrl: './tarjeta-evento-perfil.component.html',
  styleUrls: ['./tarjeta-evento-perfil.component.css']
})
export class TarjetaEventoPerfilComponent {
  @Input() evento: Evento; // Recibes los datos del evento desde el componente padre
  @Output() id_evento = new EventEmitter<number>();



  deleteEvent(): void{
      this.id_evento.emit(this.evento.id_evento);
  }

  editEvent(){}

}
