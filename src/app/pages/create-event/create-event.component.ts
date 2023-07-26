import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {
  createForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.createForm = this.formBuilder.group({
      eventName: ['', Validators.required],
      image: ['', Validators.required],
      location: ['', Validators.required],
      date: ['', Validators.required],
      time: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  onImageClick(): void {
    // logica para el  hacer clic en la imagen
   
  }

  onSubmit(): void {
    // logica para enviar el formulario
  }


  // Método para manejar la selección de la imagen
  onImageSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input?.files?.length) {
      const file = input.files[0];
      // Aquí puedes hacer lo que desees con el archivo seleccionado
      console.log('Archivo seleccionado:', file);
    }
  }
}
