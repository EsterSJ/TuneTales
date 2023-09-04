import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Evento } from 'src/app/models/evento';
import {EventsService} from '../../shared/events.service';
import { UserService } from 'src/app/shared/user.service';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.css']
})
export class EditEventComponent implements OnInit {
  public createForm: FormGroup;
  public event: Evento;
  public fileTmp: any = "assets/img/noImage.jpg";
  public id_evento: number;

  constructor(private eventsService: EventsService, public userService: UserService, public router: Router, private route: ActivatedRoute) { 
}

  
  ngOnInit() {
    this.createForm = new FormGroup({
      'eventName': new FormControl(null, [Validators.required,]),
      'image': new FormControl(null, [Validators.required]),
      'location': new FormControl(null, [Validators.required]),
      'date': new FormControl(null, [Validators.required]),
      'time': new FormControl(null, [Validators.required]),
      'description': new FormControl(null, [Validators.required]),
    });
    let id_evento:number;
    const defaultPhoto = "assets/img/sirena.png";
    const fileInput = document.getElementById('image') as HTMLInputElement;
    const img = document.getElementById('foto_evento') as HTMLImageElement; // Usar HTMLImageElement en lugar de HTMLInputElement
  

    this.route.params.subscribe(params => {
      id_evento = params['id_evento'];
      this.id_evento = id_evento;
    });
    this.eventsService.getEventDetails(id_evento).subscribe((data:Response) => {
        this.fileTmp = data[0].photo; 
        this.event = data[0];
      console.log(data);
    });

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
    const evento = this.createForm.value;
    const body = new FormData();
    // body.append('id_evento', this.id_evento.toString());
    // body.append('photo',this.fileTmp);
    // body.append('name_event', this.createForm.get('eventName').value);
    // body.append('place', this.createForm.get('location').value);
    // body.append('date', this.createForm.get('date').value);
    // body.append('hour', this.createForm.get('time').value);
    // body.append('description', this.createForm.get('description').value);

    let nuevoEvento = new Evento (
      this.id_evento, 
      null, 
      this.createForm.get('eventName').value,
      this.createForm.get('date').value,
      this.createForm.get('time').value,
      this.createForm.get('location').value,
      null,
      null,
     this.createForm.get('description').value
     )

     body.append('photo',this.fileTmp);
     body.append('nuevoEvento', JSON.stringify(nuevoEvento));



    this.eventsService.editEvent(body).subscribe((data:Response)=>{
      console.log(nuevoEvento);
      Swal.fire({
        text: "Tu evento ha sido modificado",
        icon: 'success',
        confirmButtonText: 'Aceptar'
      });
      this.router.navigateByUrl('/profile');
    });
  
  }
}









//   onSubmit(){
    
//     let name_event = this.createForm.get('eventName').value;
//     let place = this.createForm.get('location').value;
//     let date = this.createForm.get('date').value;
//     let hour = this.createForm.get('time').value;
//     let photo = this.createForm.get('image').value;
//     let description = this.createForm.get('description').value;
//     let id_evento = this.id_evento;
  
    
//     this.event = new Evento (id_evento, null, name_event, date, hour, place, null, photo, description)
//     console.log(this.event);    
   
    
//        this.eventsService.editEvent(this.event).subscribe((data:Response)=>{
//          console.log(data);
//        });
//        alert("Evento actualizado correctamente")
//        this.router.navigateByUrl('/profile');   

//      }
  


//   // manejar la selección de la imagen
//   onImageSelected(event: Event): void {
//     const input = event.target as HTMLInputElement;
//     if (input?.files?.length) {
//       const file = input.files[0];
//       //  archivo seleccionado
//       console.log('Archivo seleccionado:', file);
//     }
//   }
// }
