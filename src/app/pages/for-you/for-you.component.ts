import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
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

  private url: string = 'https://apitunetales-production.up.railway.app/paraTi';

  public publicaciones: Publicacion[];

  constructor (private http: HttpClient, public userService: UserService, public router: Router){
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

  handlePublicacionClick(id_publicacion: number) {
    this.router.navigate(['/publicacion', id_publicacion]); // Navegar a la ruta de detalle con el ID de la publicación
  
  }

}
