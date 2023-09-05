import { NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { response } from 'express';
import { Comentario } from 'src/app/models/comentario';
import { Like } from 'src/app/models/likes';
import { Publicacion } from 'src/app/models/publicacion';
import { User } from 'src/app/models/user';
import { CommentsService } from 'src/app/shared/comments.service';
import { LikesService } from 'src/app/shared/likes.service';
import { PublicationService } from 'src/app/shared/publication.service';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-publicacion',
  templateUrl: './publicacion.component.html',
  styleUrls: ['./publicacion.component.css']
})
export class PublicacionComponent implements OnInit{

  // public letra:boolean = false;
  public publicacion:Publicacion;
  public comentario:Comentario;
  public id_publicacion:number;
  public selectedItem: number = null;
  public comentarios: Comentario [] = [];
  public newComment:string = '';
  public characterCount: number = 400; 
  public likeCount: number = 0;
  public user: User;


  public newLike: number = 1;
  public liked: boolean = false; 
  public id_like:number;
  public like: Like;


  constructor(private router: Router, public publicationService:PublicationService, private formBuilder: FormBuilder,public Http:HttpClient, private CommentsService:CommentsService, public FormsModule:FormsModule, public UserService:UserService, private likeService:LikesService) {
  }
  


ngOnInit(): void {

  this.user = this.UserService.user;
  this.publicacion = this.publicationService.publicacion;

  if (this.publicacion) {
    this.id_publicacion = this.publicacion.id_publicacion;
    console.log('ID de publicación:', this.id_publicacion);
    this.loadComments();
  }
}

publishComment( comentario2: string ) { 
  console.log("hola estoy dentro de publishcoment")
 

  const comentario: Comentario = new Comentario (
    null, 
    114,
    comentario2,
    5
    );
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


doLike(){
  console.log("funcion like aqui")

  const like = new Like (
    null,
    114,
    10000
  );

  this.likeService.likePublication(like).subscribe((data:Response) => {
    console.log("like publicado", response);
    this.newLike = 0;
  })
} 

updateLikeCount() {
  const like = this.newLike;
  this.likeCount = 0 + like;
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

    //   0,
    //   0,
    //   "https://soundcloud.com/officialpinkfloyd/coming-back-to-life-2011?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
    //   "Coming Back to Life",
    //   "Where were you When I was burned and broken? While the days slipped by From my window watching And where were you When I was hurt and I was helpless? 'Cause the things you say And the things you do surround me While you were hanging yourself On someone else's words Dying to believe in what you heard I was staring straight into the shining Sun Lost in thought and lost in time While the seeds of life And the seeds of change were planted Outside, the rain fell dark and slow While I pondered on this dangerous But irresistible pastime I took a heavenly ride through our silence I knew the moment had arrived For killing the past and coming back to life I took a heavenly ride through our silence I knew the waiting had begun And headed straight into the shining Sun",
    //   "Gilmour dijo (como puede oírse en el DVD David Gilmour in Concert) que la canción fue escrita acerca de su esposa, Polly Samson. La canción está en Do mayor. Empieza con un zumbido de sintetizador en Do mayor, seguido de un solo tranquilo de guitarra tocado con un sonido limpio. El primer verso es cantado lentamente sobre los acordes del sintetizador, antes de que aparezca el ritmo principal, y que el resto de la banda se junte al arreglo. Otro verso es cantado, y seguido por un solo de guitarra. Después de eso, las últimas líneas del verso son cantadas nuevamente, y luego otro solo de guitarra con el ritmo principal es tocado hasta el final de la canción.",
    //   17,
    // );
  //   this.publicationService.getPublication(this.id_publicacion);
  // }

