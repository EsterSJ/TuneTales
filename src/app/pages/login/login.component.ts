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
  loginError: boolean = false;
  loginSuccess: boolean = false;

  constructor(private formBuilder: FormBuilder, private userService: UserService) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

 

  onSubmit() {
    if (this.loginForm.valid) {
      const formData = this.loginForm.value;

      this.userService.login(formData.username, formData.password).subscribe(
        (response) => {
          this.loginError = false;
          this.loginSuccess = true;
          // Realiza otras acciones si es necesario
        },
        (error) => {
          this.loginError = true;
          this.loginSuccess = false;
          console.error('Error en el inicio de sesión', error);
        }
      );
    }
  }
}