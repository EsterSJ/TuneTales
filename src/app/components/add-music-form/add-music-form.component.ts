import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Publicacion } from 'src/app/models/publicacion';
import { PublicationService } from 'src/app/shared/publication.service';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-add-music-form',
  templateUrl: './add-music-form.component.html',
  styleUrls: ['./add-music-form.component.css']
})
export class AddMusicFormComponent {

    public addMusicForm: FormGroup;
    public publiacion: Publicacion;

    constructor (private formBuilder: FormBuilder, private router: Router, public publicationService:PublicationService, private UserService:UserService){
      this.buildForm();
    }

    private buildForm (): void{
  
      this.addMusicForm = this.formBuilder.group({
        archivo: [,Validators.required],
        letra: '',
        historia: ''
      });
    }


    addPublication(id_publicacion: number, id_user: number, link_soundCloud: string, letter: string, history: string, likes: number) {

      let publicacion = new Publicacion(
        this.publicationService.publicacion.id_publicacion,
        this.UserService.user.id_user,
        link_soundCloud,
        letter,
        history,
        likes
      );

      this.publicationService.postPublication(publicacion).subscribe((data:Publicacion)=> {
        this.publiacion = data;
        console.log(data);
        this.router.navigateByUrl('/Publicacion')
      })
    }
}
