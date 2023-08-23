import { Component, EventEmitter, Input, Output } from '@angular/core';
import { EventsService } from 'src/app/shared/events.service';
import { Evento } from 'src/app/models/evento';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tarjeta-evento-perfil',
  templateUrl: './tarjeta-evento-perfil.component.html',
  styleUrls: ['./tarjeta-evento-perfil.component.css']
})
export class TarjetaEventoPerfilComponent {
  @Input() evento: Evento; // Recibes los datos del evento desde el componente padre
  @Output() id_evento = new EventEmitter<number>();

constructor(public router: Router, public eventsService: EventsService){}

  deleteEvent(): void{
      this.id_evento.emit(this.evento.id_evento);
      alert("Evento borrado correctamente");
      this.router.navigateByUrl('/profile');
  }


  editEvent():void{
    const id_evento = this.evento.id_evento;
    this.router.navigateByUrl(`/editEvent/${id_evento}`);
  }

}
