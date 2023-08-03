import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url: string = 'http://localhost:3000';

  public user: User;

  constructor(private http: HttpClient) { 
    this.user = new User(0, "prueba", "prueba@gmail.com", "12345678", "https://instagram/prueba", "https://facebook/prueba", "https://twitter/prueba", new Date(2023, 7, 2), "pop-rock", "esto es una descripcion de prueba", "assets/img/TarjetaEventoPerfil.png");
  }

  public editProfile(update_user: User){    
    return this.http.put(this.url + '/editProfile',update_user);
  }
}
