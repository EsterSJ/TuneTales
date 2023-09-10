import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LikesService {

  private url = 'http://localhost:3000/'

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

  // cosas IVANA
  // unlikePublication(id_publicacion: number): Observable<Object> {
  //   return this.http.delete(${this.url}/likes/${id_publicacion}/);
  // }


  // getLikeCount(id_publicacion: number): Observable<number> {
  //   return this.http.get<number>(${this.url}/like/${id_publicacion});
  // }
}
