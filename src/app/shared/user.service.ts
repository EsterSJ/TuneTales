import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url: string = "http:localhost:4200";

  public logueado:boolean = false;
  public user: UserService;

  constructor() { 

    this.logueado = false;
  }
}
