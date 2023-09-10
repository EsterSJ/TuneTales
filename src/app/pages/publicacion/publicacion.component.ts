import { NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormsModule, NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Comentario } from 'src/app/models/comentario';
// import { Like } from 'src/app/models/likes';
import { Publicacion } from 'src/app/models/publicacion';
// import { User } from 'src/app/models/user';
import { CommentsService } from 'src/app/shared/comments.service';
import { LikesService } from 'src/app/shared/likes.service';
import { PublicationService } from 'src/app/shared/publication.service';
// import { UserService } from 'src/app/shared/user.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { UserService } from 'src/app/shared/user.service';


@Component({
  selector: 'app-publicacion',
  templateUrl: './publicacion.component.html',
  styleUrls: ['./publicacion.component.css']
})
export class PublicacionComponent implements OnInit{

  //ESTER
  public publicacion:any;
  public usuario: any;
  public iconoColor: string;
  public liked: boolean = false; 
  public likeCount: number;
  public userLogueado: Number = this.userService.user.id_user;



  public letra:boolean = true;


  public comentario:Comentario;
  public id_publicacion:number;
  public selectedItem: number = null;
  public comentarios: Comentario [] = [];
  public newComment:string = '';
  public characterCount: number = 400; 
  public id_like:number;
  public url_segura: SafeResourceUrl;
  public likes: any;


  constructor(private route2: ActivatedRoute, private router: Router, public publicationService:PublicationService, private formBuilder: FormBuilder,public Http:HttpClient, private CommentsService:CommentsService, public FormsModule:FormsModule, private likeService:LikesService, public userService: UserService, private sanitizer: DomSanitizer) {
    const id = this.route2.snapshot.paramMap.get('id_publicacion'); // 'id' es el nombre del parámetro en tu ruta
    if (id) {
      console.log('Valor:', id);
      this.id_publicacion = Number(id);
      this.inicializar_publicacion();
    }
    this.selectedItem = 0;
  }

ngOnInit(): void {

}
//ESTER
public inicializar_publicacion(){
  this.publicationService.getPublicationById(this.id_publicacion).subscribe((data)=>{
    this.publicacion = data[0][0];
    this.usuario = data[1][0];
    this.comentarios = data[2];
    this.likes = data[3];
    this.likeCount = this.publicacion.likes;
    
    let i = 0;   
    while (i < this.likes.length) {
      if (this.likes[i].id_publicacion === this.publicacion.id_publicacion && this.likes[i].id_user === this.userLogueado) {
        this.liked = true;
        break; // Salir del bucle una vez que se haya encontrado el like
      }
      i++;
    }    
  });  
}

public verPerfil(){
  this.userService.profile = this.usuario;
  this.router.navigateByUrl('/profile');
}


publishComment( comentario2: string ) { 
  console.log("hola estoy dentro de publishcoment")

  const comentario: Comentario = new Comentario (null, this.usuario.id_user, this.id_publicacion, comentario2)

  this.CommentsService.postComment(comentario).subscribe(
    (response) => {
      console.log('Comentario publicado con éxito', response);
      this.newComment = ''; // Limpiar el campo de comentario después de publicar
      this.loadComments(); // Recargar los comentarios después de publicar uno nuevo
    },
   
  );
}


loadComments() {
  this.CommentsService.getComments(this.id_publicacion).subscribe(
    (comentarios) => {
      this.comentarios = comentarios;
    },
   
  );
}


updateCharacterCount() {
  const commentLength = this.newComment.length;
  this.characterCount = 400 - commentLength;
}

// LIKES

public cambiarColorIcono() {
  if (this.liked == false){
        this.likeService.likePublication(this.userService.user.id_user, this.publicacion.id_publicacion).subscribe(() => {
          console.log('Like agregado con éxito');
          this.liked = true;
          this.likeCount++;
        });    
  }
  else{
    this.likeService.unlikePublication(this.userService.user.id_user, this.publicacion.id_publicacion).subscribe(() => {
      console.log('Like eliminado con éxito');
      this.liked = false;
      this.likeCount--;
    }); 
  }
}

loadPublication(id_publicacion: number): void {
  this.publicationService.getPublicationById(id_publicacion).subscribe((data: Publicacion) => {
  this.publicacion = data;
  });
}

public selectElement(element:number): void {
    this.selectedItem = element;
}
  
}


