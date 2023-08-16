import { Injectable } from '@angular/core';
import { Publicacion } from '../models/publicacion';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class PublicationService {

  public addMusicForm: FormGroup;
  private url: string = 'http://localhost:3000/publicacion';
  public publicaciones: Publicacion [] = [];
  public publicacion: Publicacion;
  public letra:boolean = false;

  constructor(private http:HttpClient, private FormBuilder: FormBuilder) { 
    this.addMusicForm = this.FormBuilder.group({
      link_soundCloud: '',
      name_letter: '',
      letter: '',
      history: ''
    });
  }

// agregar publicacion

addPublicacion(publicacion: Publicacion): Observable<Object> {
  return this.http.post(this.url, publicacion);
}

setPublicacion(publicacion: Publicacion): void {
  this.publicacion = publicacion;
}

// obtener todas las publicaciones 
//   getPublicaciones(): Publicacion[] {
//   return this.publicaciones;
// }

getPublicacion():Publicacion {
  return this.publicacion;
}


  getPublicationById(id_publicacion: Number) {
    let url = `http://localhost:3000/publicacion/${id_publicacion}`;
    return this.http.get(url);
}

  postPublication(publicacion:Publicacion):Observable<Object>{
    return this.http.post(this.url, publicacion);
  }

  editPublication(publication:Publicacion):Observable<Object>{
    return this.http.put(this.url, publication);
  }

  deletePublication(id_publicacion:Publicacion):Observable<Object>{
    return this.http.request('delete', this.url, {body:{id_publicacion:id_publicacion}});
  }
}
