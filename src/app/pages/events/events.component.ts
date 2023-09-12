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
  public place: string = ''; // Propiedad para almacenar la localidad
  
  constructor (public http: HttpClient, public eventService: EventsService){}

  ngOnInit() {
    this.eventService.getAllEvent().subscribe(data => {
      this.eventos = data;
    });
    
  }
  buscarPorPlace() {
    if (this.place.trim() !== '') {
      // Llama a tu servicio para buscar eventos por "place" y actualiza this.eventos con los resultados.
      // Puedes usar un filtro para seleccionar eventos que coincidan con el "place".
      // Por ejemplo:
      this.eventos = this.eventos.filter((evento: Evento) =>
        evento.place.toLowerCase().includes(this.place.toLowerCase())
      );
    } else {
      // Si no se proporciona ningún "place", muestra todos los eventos.
      this.eventService.getAllEvent().subscribe(data => {
        this.eventos = data;
      });
    }
  }
}

