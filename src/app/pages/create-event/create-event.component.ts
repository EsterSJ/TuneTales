import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Evento } from 'src/app/models/evento';
import {EventsService} from '../../shared/events.service';
import { UserService } from 'src/app/shared/user.service';



@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {

  public evento: Evento;
  public createForm: FormGroup;
  public fileTmp: any;
  imgSrc: string = "assets/img/ImgEvento.png";


  constructor(
    private formBuilder: FormBuilder,
    private eventsService: EventsService, 
    public userService: UserService, 
    public router: Router) { }

  ngOnInit() {
    this.createForm = this.formBuilder.group({
      eventName: ['',[Validators.required,]],
      image: ['' ,[Validators.required]],
      location: ['',[Validators.required]],
      date: [null, [Validators.required]],
      time: [null, [Validators.required]],
      description: ['', [Validators.required]]
    });

    document.addEventListener('DOMContentLoaded', () => {
      const defaultPhoto = "assets/img/sirena.png";
      const img = document.getElementById('foto_perfil') as HTMLImageElement;
      const fileInput = document.getElementById('photo') as HTMLInputElement;

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
    });
  }

  public getFile($event: any): void{
    const file = $event.target.files[0];
    this.fileTmp = file;
    console.log(file);
  }

  onImageClick(): void {
    // Simula el clic en el input de tipo archivo al hacer clic en la imagen
    const inputElement = document.getElementById('image') as HTMLInputElement;
    inputElement.click();
  }

  onSubmit(){
    
    if (this.createForm.invalid) {
      return;
    }

    const name_event = this.createForm.value.eventName;
    const place = this.createForm.value.location;
    const date = this.createForm.value.date;
    const hour = this.createForm.value.time;
    const image = this.createForm.value.image;
    const id_user = this.userService.user.id_user;
    const description = this.createForm.value.description;

    const event = new Evento(null, id_user, name_event, date, hour, place, null, null, description);


    const body = new FormData();
    body.append('image', image);
    body.append('add_event', JSON.stringify(event));
   
    
       this.eventsService.addEvent(body).subscribe((data:Response)=>{
         console.log(data);
         alert("Evento creado correctamente");
         this.router.navigateByUrl('/profile');
       });
     }
  


  // manejar la selección de la imagen
  // onImageSelected(event: Event): void {
  //   const input = event.target as HTMLInputElement;
  //   if (input?.files?.length) {
  //     const file = input.files[0];
  //     //  archivo seleccionado
  //     console.log('Archivo seleccionado:', file);
  //     this.createForm.patchValue({ image: file });
  //   }
  // }
}
