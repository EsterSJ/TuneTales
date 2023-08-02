import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url: string = "http:localhost:4200";

  public logueado:boolean = false;
  public user: UserService;

  constructor(private http: HttpClient) { 

    this.logueado = false;
  }

  login(username: string, password: string): Observable<any> {
    const data = { username, password };
    return this.http.post(`${this.url}/login`, data);
  }
}
