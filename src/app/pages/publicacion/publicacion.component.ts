import { NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Comentario } from 'src/app/models/comentario';
// import { Like } from 'src/app/models/likes';
import { Publicacion } from 'src/app/models/publicacion';
import { User } from 'src/app/models/user';
import { CommentsService } from 'src/app/shared/comments.service';
import { LikesService } from 'src/app/shared/likes.service';
import { PublicationService } from 'src/app/shared/publication.service';
import { UserService } from 'src/app/shared/user.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-publicacion',
  templateUrl: './publicacion.component.html',
  styleUrls: ['./publicacion.component.css']
})
export class PublicacionComponent implements OnInit{

  public letra:boolean = false;
  public publicacion:Publicacion;
  public comentario:Comentario;
  public id_publicacion:number;
  public selectedItem: number = null;
  public comentarios: Comentario [] = [];
  public newComment:string = '';
  public characterCount: number = 400; 
  public likeCount: number = 0;
  public user: User = this.UserService.user;
  public liked: boolean = false; 
  public id_like:number;
  public url_segura: SafeResourceUrl;
  public artista: string = "Thomas"
  // public like: Like;


  constructor(private router: Router, public publicationService:PublicationService, private formBuilder: FormBuilder,public Http:HttpClient, private CommentsService:CommentsService, public FormsModule:FormsModule, public UserService:UserService, private likeService:LikesService, private sanitizer: DomSanitizer) {
    
  }

ngOnInit(): void {
  console.log("ngOnInit DENTRO ");
  this.publicacion = this.publicationService.publicacion;

  if (this.publicacion) {
    this.id_publicacion = this.publicacion.id_publicacion;
    console.log('ID de publicación:', this.id_publicacion);
    console.log(this.publicacion.multimedia);
    this.loadComments();
    this.url_segura = this.sanitizer.bypassSecurityTrustResourceUrl(this.publicacion.multimedia);
  }
}


publishComment( comentario2: string ) { 
  console.log("hola estoy dentro de publishcoment")

  const comentario: Comentario = new Comentario (null, this.UserService.user.id_user, 114, comentario2)
     console.log("objeto comentario")
     console.log(comentario);


  this.CommentsService.postComment(comentario).subscribe(
    (response) => {
      console.log('Comentario publicado con éxito', response);
      this.newComment = ''; // Limpiar el campo de comentario después de publicar
      this.loadComments(); // Recargar los comentarios después de publicar uno nuevo
    },
   
  );
}


loadComments() {
  console.log('Cargando comentarios para la publicación con ID:', this.id_publicacion);
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


likePost() {
  console.log("Like Post Boton CLICK de LIKE POST");

  if (!this.user || !this.publicacion) {
    // Verificar que haya un usuario logueado y una publicación válida
    console.log("Usuario o publicación no válidos.");
    return;
  }

  const id_publicacion = this.publicacion.id_publicacion;

  if (!this.liked) {
    // Si no le ha dado like, agrega el like
    console.log("Agregando like...");
    this.likeService.likePublication(id_publicacion).subscribe(
      () => {
        this.liked = true;
        this.likeCount++;
        console.log('Like agregado con éxito');
      },
      
    );
  }
}

loadPublication(id_publicacion: number): void {
  this.publicationService.getPublicationById(id_publicacion).subscribe((data: Publicacion) => {
    console.log(data);
    this.publicacion = data;
  });
}


public selectElement(element:number): void {
    this.selectedItem = element;
}
  
  }


