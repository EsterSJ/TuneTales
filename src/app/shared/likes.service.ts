import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LikesService {

  private url = 'https://apitunetales-production.up.railway.app/'

  constructor(private http:HttpClient) { }

  likePublication(id_user: Number, id_publicacion: number): Observable<Object> {
    console.log("Like Publication service ESTOY EN EL SERVICIO LIKES");
    const likeData = {
      id_publicacion: id_publicacion,
      id_user: id_user
    };
    return this.http.post(`${this.url}likes`, likeData);
  }

  unlikePublication(id_user: Number, id_publicacion: number): Observable<Object> {
    const likeData = {
      id_publicacion: id_publicacion,
      id_user: id_user
    };
    return this.http.request('delete', `${this.url}likes`, { body: likeData });
  }
}
