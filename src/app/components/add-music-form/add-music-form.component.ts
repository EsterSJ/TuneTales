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
    public fileTmp: any;
    //borrar si no va
    public id_user: any;



    constructor (private formBuilder: FormBuilder, private router: Router, public publicationService:PublicationService, public UserService:UserService, public Http:HttpClient){
      this.buildForm();
    }

    private buildForm (): void{
  
      this.addMusicForm = this.formBuilder.group({
        image: '',
        multimedia: [,Validators.required],
        name_letter: '',
        letter: '',
        history: ''
      });
    }

    //RECOJO EL ARCHIVO DE IMAGEN DEL FORMULARIO
    public getFile($event: any): void{
      const file = $event.target.files[0];
      this.fileTmp = file;
    }

    sendPubli(){
      // const publi = this.addMusicForm.value;
      //borrar si no va
      this.id_user = this.UserService.user.id_user;
      const body = new FormData();
      //borrar si no va
      body.append('id_user', this.id_user);
      body.append('multimedia', this.addMusicForm.get('multimedia').value);
      body.append('photo', this.fileTmp);
      body.append('name_letter', this.addMusicForm.get('name_letter').value);
      body.append('letter', this.addMusicForm.get('letter').value);
      body.append('history', this.addMusicForm.get('history').value);

      console.log("VAMOS A MOSTRAR EL BODY DE SENDPUBLI: ");
      body.forEach((value, key) => {
        console.log(key + ": " + value);
      });
      
      this.publicationService.addPublicacion(body).subscribe(()=>{
        this.router.navigateByUrl('/profile');
      })        
    }
  }

