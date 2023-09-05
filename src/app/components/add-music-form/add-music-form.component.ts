import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Publicacion } from 'src/app/models/publicacion';
import { User } from 'src/app/models/user';
import { PublicationService } from 'src/app/shared/publication.service';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-add-music-form',
  templateUrl: './add-music-form.component.html',
  styleUrls: ['./add-music-form.component.css']
})
export class AddMusicFormComponent {

    public addMusicForm: FormGroup;
    public publicacion: Publicacion;
    public letra:boolean = false;
    public user:User;



    constructor (private formBuilder: FormBuilder, private router: Router, public publicationService:PublicationService, public UserService:UserService, public Http:HttpClient){
      this.buildForm();
    }

    private buildForm (): void{
  
      this.addMusicForm = this.formBuilder.group({
        link_soundCloud: [,Validators.required],
        name_letter: '',
        letter: '',
        history: '',
        id_user: this.UserService.user.id_user
      });
    }

    sendPubli(){
      const publi = this.addMusicForm.value;
      console.log(publi)

      this.publicationService.addPublicacion(publi).subscribe((data: Publicacion) => {
        console.log(data);
        // this.publicationService.setPublicacion(publi);
              this.router.navigateByUrl('/profile');
        })
    }
  }

