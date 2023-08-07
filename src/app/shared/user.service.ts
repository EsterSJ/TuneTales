import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url: string = 'http://localhost:3000';

  public user: User = new User(2, "Thomas", "thomas@gmail.com", "codenotch2", "https://instagram/thomas", "https://facebook/thomas", "https://twitter/thomas", new Date(2016, 7, 7), "pop-rock", "esto es una descripcion de prueba de Thomas", "https://xombitgames.com/files/2012/12/principal-640x480.jpg");
  // public profile: User = new User(3, "Ivana", "ivana@gmail.com", "codenotch3", "https://instagram/ivana", "https://facebook/ester", "https://twitter/ester", new Date(1985, 2, 26), "pop-rock", "esto es una descripcion de prueba de Ivana", "https://w7.pngwing.com/pngs/441/516/png-transparent-mario-luigi-bowser-s-inside-story-paper-mario-princess-peach-character-game-heroes-carnivoran.png");
  public profile = this.user;

  constructor(private http: HttpClient) { 
  }

  //funcion que edita el perfil de un usuario
  public editProfile(update_user: User){    
    return this.http.put(this.url + '/editProfile',update_user);
  }

  //funcion que consulta si el usuario logueado sigue al usuario del que se va a mostrar el perfil
  public consultar_seguidor(){
    return this.http.get(this.url + '/profile?id_user=' + this.user.id_user + '&id_seguido=' + this.profile.id_user);
  }

  //funcion que añade un nuevo usuario que seguido que sigue el uruario logueado
  public addSeguido(id_user: Number, id_seguido: Number){    
    return this.http.post(this.url + '/profile', {id_user, id_seguido});
  }

  public delSeguido(id_user: Number, id_seguido: Number){
      return this.http.request('delete',this.url + '/profile',{body:{id_user: id_user, id_seguido: id_seguido}})
  }

}
