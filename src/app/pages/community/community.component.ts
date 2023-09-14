import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { Publicacion } from 'src/app/models/publicacion';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.css']
})
export class CommunityComponent {

  // @Input() publi: Publicacion;
  @Input() i: number;

  private url: string = 'https://apitunetales-production.up.railway.app/comunidad';

  public publicaciones: Publicacion[];

  constructor (private http: HttpClient){
    this.getPublicaciones();
  }

  public getAll(){
    return this.http.get(this.url);
  }

  public getPublicaciones(){
    this.getAll().subscribe((data: Publicacion[]) => {
      this.publicaciones = data;
    }); 
  }

  public mostrarInfo(i: number){

          Swal.fire({
            title: this.publicaciones[i].name_letter,
            imageUrl: this.publicaciones[i].image,
            imageWidth: 300,
            imageHeight: 300,
            confirmButtonText: 'Regístrate',
            showCancelButton: true,
            cancelButtonText: 'Cancelar'
          }).then((result) => {
            if (result.isConfirmed) {
              // Redirige a la página registro
              window.location.href = 'register';
            }
          });
        // })
  }

}
