import { Injectable } from '@angular/core';
import { Publicacion } from '../models/publicacion';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class PublicationService {


  // private url: string = 'http://localhost:3000/';

  public addMusicForm: FormGroup;
  private url: string = 'http://localhost:3000/publicacion';
  public publicaciones: Publicacion [] = [];
  public publicacion: Publicacion;
  //= new Publicacion (
    // 114,
    // 0,
    // "https://soundcloud.com/officialpinkfloyd/coming-back-to-life-2011?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
    // "Coming Back to Life",
    // "Where were you When I was burned and broken? While the days slipped by From my window watching And where were you When I was hurt and I was helpless? 'Cause the things you say And the things you do surround me While you were hanging yourself On someone else's words Dying to believe in what you heard I was staring straight into the shining Sun Lost in thought and lost in time While the seeds of life And the seeds of change were planted Outside, the rain fell dark and slow While I pondered on this dangerous But irresistible pastime I took a heavenly ride through our silence I knew the moment had arrived For killing the past and coming back to life I took a heavenly ride through our silence I knew the waiting had begun And headed straight into the shining Sun",
    // "Gilmour dijo (como puede oírse en el DVD David Gilmour in Concert) que la canción fue escrita acerca de su esposa, Polly Samson. La canción está en Do mayor. Empieza con un zumbido de sintetizador en Do mayor, seguido de un solo tranquilo de guitarra tocado con un sonido limpio. El primer verso es cantado lentamente sobre los acordes del sintetizador, antes de que aparezca el ritmo principal, y que el resto de la banda se junte al arreglo. Otro verso es cantado, y seguido por un solo de guitarra. Después de eso, las últimas líneas del verso son cantadas nuevamente, y luego otro solo de guitarra con el ritmo principal es tocado hasta el final de la canción.",
    //  17,
    //  "https://i.scdn.co/image/ab67616d0000b2738431fb4cb38f8ee96d3434c0"
    //  );
  public letra:boolean = false;

  constructor(private http:HttpClient, private FormBuilder: FormBuilder, private userService: UserService) { 
    this.addMusicForm = this.FormBuilder.group({
      id_user: '',
      multimedia: '',
      name_letter: '',
      letter: '',
      history: '',
      image: ''
    });
  }

// agregar publicacion

  addPublicacion(publicacion: FormData) {
  return this.http.post(this.url, publicacion);
  }

  setPublicacion(publicacion: Publicacion): void {
    this.publicacion = publicacion;
  }
  
  getPublicationById(id_publicacion: number): Observable<Publicacion> {
    return this.http.get<Publicacion>(`${this.url}?id_publicacion=${id_publicacion}`);
  }
  
  postPublication(publicacion:Publicacion):Observable<Object>{
    return this.http.post(this.url, publicacion);
  }
  
  editPublication(publication:Publicacion):Observable<Object>{
    return this.http.put(this.url, publication);
  }
  
  deletePublication(id_publicacion:Publicacion):Observable<Object>{
    return this.http.request('delete', this.url, {body:{id_publicacion:id_publicacion}});
  }

  getTop3Publicaciones() {
    return this.http.get('http://localhost:3000/top3publicaciones');
  }

}

