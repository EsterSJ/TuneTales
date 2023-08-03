import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url: string = "http://localhost:3000"; 

  public logueado: boolean = false;
  public usuario: User | null = null; // Inicializado como null
  
  
  constructor(private http: HttpClient) { 
    this.logueado = false;
  }

  login(user: User) {
    return this.http.post(`${this.url}/login`, user);
  }
}