import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/shared/user.service';
import { User } from 'src/app/models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loginError: boolean = false;
  loginSuccess: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private usuarioService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required], // Cambiado a 'username' aquí
      password: ['', Validators.required]
    });
  }

  onSubmit(): void { // Cambiado a 'onSubmit()' aquí
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;

      // Crear una instancia de User con el usuario y contraseña
      const userObj = new User(0, username, '', password, '', '', '', new Date(), '', '', '');

      this.usuarioService.login(userObj).subscribe(
        (response: any) => {
          if (response.success) {
            this.loginError = false;
            this.loginSuccess = true;
            console.log('Inicio de sesión exitoso');
            // Almacena todos los datos del usuario en el servicio
            this.usuarioService.logueado = true;
            this.usuarioService.user = response.user;
            console.log('Datos del usuario almacenados en el servicio:', this.usuarioService.user);
            this.router.navigate(['/profile']);
          } else {
            this.loginError = true;
            this.loginSuccess = false;
            console.log(response.message);
          }
        },
      
      );
    } 
  }
}