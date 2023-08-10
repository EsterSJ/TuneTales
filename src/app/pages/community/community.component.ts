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

  @Input() publi: Publicacion;
  @Input() i: number;

  private url: string = 'http://localhost:3000/comunidad';

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

    // Realizar una solicitud a la API de SoundCloud para obtener los datos de la publicación
    // this.http.get(`https://api.soundcloud.com/resolve?url=${this.publicaciones[i].link_soundCloud}&client_id=YOUR_CLIENT_ID`)
    // .subscribe((response: any) => {
    //       const imagen = response.artwork_url.replace('-large', '-t500x500');

          Swal.fire({
            title: this.publicaciones[i].link_soundCloud,
            imageUrl: 'assets/img/Logo.png',
            imageWidth: 400,
            imageHeight: 200,
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
