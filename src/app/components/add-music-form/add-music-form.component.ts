import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-music-form',
  templateUrl: './add-music-form.component.html',
  styleUrls: ['./add-music-form.component.css']
})
export class AddMusicFormComponent {

    public addMusicForm: FormGroup;

    constructor (private formBuilder: FormBuilder){
      this.buildForm();
    }

    private buildForm (): void{
  
      this.addMusicForm = this.formBuilder.group({
        archivo: [,Validators.required],
        letra: '',
        historia: ''
      });
    }
}
