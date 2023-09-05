import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Data } from '@angular/router';
import { Observable } from 'rxjs';
import { Like } from '../models/likes';

@Injectable({
  providedIn: 'root'
})
export class LikesService {

  private url = 'http://localhost:3000/'

  constructor(private http:HttpClient) { }


  likePublication(like: Like):Observable<Object> {
    return this.http.post(`${this.url}/likes`, like);
  }

  unlikePublication(id_like: number): Observable<Object> {
    return this.http.delete(`${this.url}/likes/${id_like}/`);
  }


  getLikeCount(id_like: number): Observable<number> {
    return this.http.get<number>(`${this.url}/like/${id_like}`);
  }
}
