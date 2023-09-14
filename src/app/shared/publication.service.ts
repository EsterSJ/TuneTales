import { Injectable } from '@angular/core';
import { Publicacion } from '../models/publicacion';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class PublicationService {

  public addMusicForm: FormGroup;
  private url: string = 'apitunetales-production.up.railway.app/publicacion';
  public publicaciones: Publicacion [] = [];
  public publicacion: Publicacion;
  public letra:boolean = false;
  private httpOptions: { headers: HttpHeaders } = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http:HttpClient, private FormBuilder: FormBuilder, private userService: UserService) { 
    this.addMusicForm = this.FormBuilder.group({
      id_user: '',
      multimedia: '',
      name_letter: '',
      letter: '',
      history: '',
      image: ''
    });
  }

  addPublicacion(publicacion: FormData) {
  return this.http.post(this.url, publicacion);
  }

  setPublicacion(publicacion: Publicacion): void {
    this.publicacion = publicacion;
  }
  
  getPublicationById(id_publicacion: number): Observable<Publicacion> {
    return this.http.get<Publicacion>(`${this.url}?id_publicacion=${id_publicacion}`);

  }
  
  postPublication(publicacion:Publicacion):Observable<Object>{
    return this.http.post(this.url, publicacion);
  }
  
  deletePublication(id_publicacion:Publicacion):Observable<Object>{
    return this.http.request('delete', this.url, {body:{id_publicacion:id_publicacion}});
  }

  getTop3Publicaciones() {
    return this.http.get('apitunetales-production.up.railway.app/top3publicaciones', this.httpOptions);
  }

}

