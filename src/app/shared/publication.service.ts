import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})


export class Top3PublicacionesService {
  private apiUrl = 'http://localhost:3000/top3publicaciones';

  constructor(private http: HttpClient) { }

  getTop3Publicaciones() {
    return this.http.get(this.apiUrl);
  }
}
