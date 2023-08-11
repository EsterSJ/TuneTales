import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { Publicacion } from 'src/app/models/publicacion';
import { UserService } from 'src/app/shared/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-for-you',
  templateUrl: './for-you.component.html',
  styleUrls: ['./for-you.component.css']
})
export class ForYouComponent {
  @Input() i: number;

  private url: string = 'http://localhost:3000/paraTi';

  public publicaciones: Publicacion[];

  constructor (private http: HttpClient, public userService: UserService){
    this.getAll().subscribe((data: Publicacion[]) => {
      this.publicaciones = data;
    });     
  }

  public getAll(){    
    return this.http.get(this.url + '?id_user=' + this.userService.user.id_user);
  }

  public getAllUser(user: string){   
    return this.http.get(this.url + '?user=' + user);
  }

  public getPublicaciones(user: string){    
    if (user != ''){     
      this.getAllUser(user).subscribe((data: Publicacion[])=>{ 
        if (data.length == 0){
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: user + ' no tiene publicaciones aún',
          })
        }
        else{
          this.publicaciones = data;
        } 
      });
    }
    else{      
        this.getAll().subscribe((data: Publicacion[]) => { this.publicaciones = data; });
      }
  }

  public verPublicacion(publi: Publicacion){
    //aqui nos lleva a la pagina publicacion
    // this.publicacionService.publicacion = publi;
    // this.router.navigateByUrl('/publicacion');
  }

}
