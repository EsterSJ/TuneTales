import { Injectable } from '@angular/core';
import { Publicacion } from '../models/publicacion';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PublicationService {


  private url: string = 'http://localhost:3000/';

  public publicacion: Publicacion;

  constructor(private http:HttpClient) { 

  }

  postPublication(publicacion:Publicacion):Observable<Object>{
    return this.http.post(this.url + '/publication', publicacion);
  }

  editPublication(publication:Publicacion):Observable<Object>{
    return this.http.put(this.url, publication);
  }

  deletePublication(id_publicacion:Publicacion):Observable<Object>{
    return this.http.request('delete', this.url, {body:{id_publicacion:id_publicacion}});
  }
  getTop3Publicaciones() {
    return this.http.get('http://localhost:3000/top3publicaciones');
  }

}

