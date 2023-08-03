import { Component } from '@angular/core';
import { User } from 'src/app/models/user';
import { FormGroup, FormControl, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import {UserService} from '../../shared/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.css']
})
export class FormRegisterComponent {

  public miFormularioReg: FormGroup ;
  public user: User;

    constructor(private userService: UserService, public router: Router){}

    ngOnInit(){
      this.miFormularioReg = new FormGroup({
        'user': new FormControl(null, [Validators.required]),
        'email': new FormControl(null, [Validators.required, Validators.email]),
        'password': new FormControl(null, [Validators.required, this.passwordValidator]),
        'repeatPassword': new FormControl(null, [Validators.required, this.passwordValidator]),
        'date': new FormControl(null, [Validators.required]),
      })
    }

    Registro(){
      alert("Usuario registrado correctamente, ya puedes acceder con tu nuevo email y contraseña");
    }
  
    Errors(){
      alert("Algo parece haber ido mal, revisa las contraseñas")
    }

    passwordValidator(control: AbstractControl): ValidationErrors | null {
      const password = control.value;
      const valid = /\d/.test(password) && /[A-Z]/.test(password) && /[a-z]/.test(password);
      return valid ? null : { invalidPassword: true };
    }

    onSubmit(){

      let user = this.miFormularioReg.get('user').value;
      let password = this.miFormularioReg.get('password').value;
      let password2 = this.miFormularioReg.get('password2').value;
      let email = this.miFormularioReg.get('email').value;
      let date = this.miFormularioReg.get('date').value;
    
      
      this.user = new User(null, user, email, password, null, null, null, date, null, null, null)
   

   
     console.log(this.user);
   
     if(password === password2){
       this.userService.register(this.user).subscribe((data:Response)=>{
         console.log(data);
         this.Registro();
       })
     }else{
       this.Errors();
     }
       
     }
}