import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Evento } from 'src/app/models/evento';
import {EventsService} from '../../shared/events.service';


@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {
  public createForm: FormGroup;
  public event: Evento;

  constructor(private eventsService: EventsService, public router: Router) { }

  ngOnInit() {
    this.createForm = new FormGroup({
      'eventName': new FormControl(null, [Validators.required,]),
      'image': new FormControl(null, [Validators.required]),
      'location': new FormControl(null, [Validators.required]),
      'date': new FormControl(null, [Validators.required]),
      'time': new FormControl(null, [Validators.required]),
      'description': new FormControl(null, [Validators.required]),
    });
  }

  onImageClick(): void {
    // logica para el  hacer clic en la imagen
  }

  onSubmit(){
    
    let name_event = this.createForm.get('eventName').value;
    let place = this.createForm.get('location').value;
    let date = this.createForm.get('date').value;
    let hour = this.createForm.get('time').value;
    let photo = this.createForm.get('image').value;
    let description = this.createForm.get('description').value;
  
    
    this.event = new Evento (null, null, name_event, date, hour, place, null, photo, description)
    console.log(this.event);
   
    
       this.eventsService.addEvent(this.event).subscribe((data:Response)=>{
         console.log(data);
       })   
     }
  


  // manejar la selección de la imagen
  onImageSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input?.files?.length) {
      const file = input.files[0];
      //  archivo seleccionado
      console.log('Archivo seleccionado:', file);
    }
  }
}
