import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../shared/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private userService: UserService) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const formData = this.loginForm.value;
      
      // Llama al metodo del servicio que se conecta al endpoint de login
      this.userService.login(formData.username, formData.password).subscribe(
        (response) => {
          // Login exitoso, realiza las acciones necesarias
          this.userService.logueado = true;
          this.userService.user = response.user;
        
        },
        (error) => {
       
          console.error('Error en el inicio de sesión', error);
        }
      );
    }
  }
}