import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
Observable
import { Evento } from '../models/evento';



@Injectable({
  providedIn: 'root'
})
export class EventsService {

  private url: string = 'http://localhost:3000';

  public evento: Evento;

  constructor(private http:HttpClient) {

  }
//AÑADIR UN EVENTO

  addEvent(event:Evento):Observable<Object>{
    return this.http.post(this.url + "/events", event)
}

//MODIFICAR UN EVENTO

 editEvent(event: Evento){    
  return this.http.put(this.url + '/${id_evento}', event);
}

//ELIMINAR UN EVENTO
deleteEvent(id_evento: number){    
  return this.http.delete(this.url + '/${id_evento}')
}
}
