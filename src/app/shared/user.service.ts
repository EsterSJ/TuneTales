import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
Observable
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  private url: string = 'http://localhost:3000';

  public logueado:boolean = false;
  public user: User;
  public profile: User;
 

  constructor(private http:HttpClient) { 

  }


  register(user:User):Observable<Object>{
    return this.http.post(this.url + "/register", user)
}


  login(user: User): Observable<any> {
    return this.http.post(`${this.url}/login`, user);
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
