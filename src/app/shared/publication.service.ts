import { Injectable } from '@angular/core';
import { Publicacion } from '../models/publicacion';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class PublicationService {


  // private url: string = 'http://localhost:3000/';

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

  getPublicationById(id_publicacion: number): Observable<any> {
    return this.http.get(`${this.url}/publicacion/${id_publicacion}`);
}

  getPublicacion():Publicacion {
  return this.publicacion;
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
  getTop3Publicaciones() {
    return this.http.get('http://localhost:3000/top3publicaciones');
  }

}

