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
 

  constructor(private http:HttpClient) { 

  }


  register(user:User):Observable<Object>{
    return this.http.post(this.url + "/register", user)
}


  public editProfile(update_user: User){    
    return this.http.put(this.url + '/editProfile',update_user);
  }

  login(user: User): Observable<any> {
    return this.http.post(`${this.url}/login`, user);
    console.log(user)
  }
}
