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

//MOSTRAR EVENTOS DE UN USUARIO

getEvent(id_user:Number){
  return this.http.get(this.url + '/events' + '?id_user=' + id_user);
}


//MOSTRAR TODOS LOS EVENTOS

getAllEvent(){
  return this.http.get(this.url + '/eventsAll');
}



//AÑADIR UN EVENTO

  addEvent(event:Evento):Observable<Object>{
    return this.http.post(this.url + "/events", event)
}

//MODIFICAR UN EVENTO

 editEvent(event: Evento):Observable<Object>{      
  return this.http.put(this.url + "/events", event);  
}

//ELIMINAR UN EVENTO
deleteEvent(id_evento: number){    
  return this.http.delete(this.url + "/events",{body:{id_evento:id_evento}})
}

}
