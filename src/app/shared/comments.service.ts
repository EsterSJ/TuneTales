import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Comentario } from '../models/comentario';
import { Observable } from 'rxjs';
import { PublicationService } from './publication.service';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  private url: string = 'http://localhost:3000'
  public comentario: Comentario;
  public id_publicacion:number;
  public comentarios: Comentario [] = [];

  constructor(private http: HttpClient, publicationService:PublicationService) { 

  }
  postComment(comentario: Comentario): Observable<Object> {
    console.log("dentro de  postComment");
    console.log(comentario);
    return this.http.post(`${this.url}/comentario`, comentario);
  }

  getComments(id_publicacion: number): Observable<Comentario[]> {
    console.log("dentro de GET comments")
    return this.http.get<Comentario[]>(`${this.url}/comentarios?id_publicacion=${id_publicacion}`);
  }

}