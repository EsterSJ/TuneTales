import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Evento } from 'src/app/models/evento';
import {EventsService} from '../../shared/events.service';
import { UserService } from 'src/app/shared/user.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {
  public createForm: FormGroup;
  public event: Evento;
  public fileTmp: any = "assets/img/noImage.jpg";
  public id_user: any;

  constructor(private eventsService: EventsService, public userService: UserService, public router: Router) { }

  ngOnInit() {
    this.createForm = new FormGroup({
      'eventName': new FormControl(null, [Validators.required,]),
      'image': new FormControl(null, [Validators.required]),
      'location': new FormControl(null, [Validators.required]),
      'date': new FormControl(null, [Validators.required]),
      'time': new FormControl(null, [Validators.required]),
      'description': new FormControl(null, [Validators.required]),
    });

    const defaultPhoto = "assets/img/sirena.png";
    const fileInput = document.getElementById('image') as HTMLInputElement;
    const img = document.getElementById('foto_evento') as HTMLImageElement; // Usar HTMLImageElement en lugar de HTMLInputElement

    fileInput.addEventListener('change', e => {
      const inputElement = e.target as HTMLInputElement;
      if (inputElement.files && inputElement.files[0]) {     
        
        const reader = new FileReader();
        reader.onload = function (e) {
          if (typeof e.target.result === 'string') {
            img.src = e.target.result;        
          }
        };
        reader.readAsDataURL(inputElement.files[0]);
      } else {
        img.src = defaultPhoto;
      }
    });
  }

  public getFile($event: any): void{
    const file = $event.target.files[0];
    this.fileTmp = file;
  }

  onSubmit(){
    this.id_user = this.userService.user.id_user;
    const evento = this.createForm.value;
    const body = new FormData();
    body.append('id_user', this.id_user);
    body.append('photo',this.fileTmp);
    body.append('name_event', this.createForm.get('eventName').value);
    body.append('place', this.createForm.get('location').value);
    body.append('date', this.createForm.get('date').value);
    body.append('hour', this.createForm.get('time').value);
    body.append('description', this.createForm.get('description').value);

    console.log(body);

    // console.log("VAMOS A MOSTRAR EL BODY DE SEND EVENT: ");
    // body.forEach((value, key) => {
    //   console.log(key + ": " + value);
    // });
    // console.log(this.fileTmp);

    this.eventsService.addEvent(body).subscribe((data:Response)=>{
      Swal.fire({
        text: "Tu evento ha sido creado",
        icon: 'success',
        confirmButtonText: 'Aceptar'
      });
      this.router.navigateByUrl('/profile');
    });
  
  }
}
