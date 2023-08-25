import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/shared/user.service';
import { EventsService } from 'src/app/shared/events.service';
import { Evento } from 'src/app/models/evento';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  public botonSeleccionado: number;

  public profile: User;


  //con este atributo sabemos si el usuario que hay que mostrar en el perfil es el mismo que esta logueado
  //si es el mismo muestra los botones de añadir publicacion y editar perfil
  //si no muestra el boton seguir/dejar de seguir
  public mostrar_logueado: Boolean;

  public siguiendo: Boolean;
  public publicaciones = [];
  public eventos: any = [];

  constructor (private router: Router, public userService: UserService, public http: HttpClient, public eventService: EventsService){
    this.botonSeleccionado = 0;
    this.profile = this.userService.profile;
    this.mostrar_logueado = this.profile == this.userService.user;
    this.inicializarSiguiendo();
  }

  
  ngOnInit(): void {
    this.loadEvents(this.profile.id_user);
  }

  loadEvents(id_user:Number): void {
    this.eventService.getEvent(id_user).subscribe(events => {
      this.eventos = events;
    }); 
  }

  //funcion que consulta si el usuario logueado sigue al que hay que mostrar en el perfil
  //si le sigue inicializa this.seguiendo a true y muestra el boton dejar de seguir
  //si no, inicializa this.siguiendo a false y muestra el boton seguir
  public inicializarSiguiendo(){
    // console.log("-------------------->");
    
    // console.log(this.userService.profile);
    
    this.userService.consultar_seguidor().subscribe((data) => {      
      if (data[0].length > 0){        
        this.siguiendo = true;
      }
      else{
        this.siguiendo = false;
      }
      this.publicaciones = data[1];
      this.eventos = data[2];
    }); 
  }

  public seleccionarBoton (indice: number){
    this.botonSeleccionado = indice;
  }

  public publicar(){
    this.router.navigateByUrl('/addMusic');
  }

  public goEditProfile(){
    this.router.navigateByUrl('/editProfile');
  }

  public nuevoEvento(){
    this.router.navigateByUrl('/createEvent');
  }

  public deleteEvent(id_evento:number): void{
    console.log(id_evento);
    this.eventService.deleteEvent(id_evento).subscribe(() => {
      this.loadEvents(this.profile.id_user);
  
    })
  }

  handlePublicacionClick(id_publicacion: number) {
    this.router.navigate(['/publicacion', id_publicacion]); // Navegar a la ruta de detalle con el ID de la publicación
  
}

  public seguir(){
    if (this.siguiendo){
      this.siguiendo = false;
      //eliminar relacion en la tabla seguidores
      let id_usuario: number = Number(this.userService.user.id_user);
      this.userService.delSeguido(this.userService.user.id_user,this.profile.id_user).subscribe((data) => {});
    }
    else{
      this.siguiendo = true;
      //añadir relacion en la tabla seguidores
      let id_usuario: number = Number(this.userService.user.id_user);
      this.userService.addSeguido(this.userService.user.id_user,this.profile.id_user).subscribe((data) => {});        
    }
  }

}
