import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/shared/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent {

  public profile: User;

  public fileTmp: any;

  constructor (public userService: UserService, public router: Router){
    this.profile = this.userService.user;
  }

  ngOnInit(): void {    
    // const fechaInput = document.getElementById('fechaNacimiento') as HTMLInputElement;
    // const year = this.profile.birth_date.getFullYear();
    // const month = (this.profile.birth_date.getMonth() + 1).toString().padStart(2, '0');
    // const day = this.profile.birth_date.getDate().toString().padStart(2, '0');
    // const fechaPlaceholder = year + "-" + month + "-" + day;
    // fechaInput.value = fechaPlaceholder;

    const defaultPhoto = "assets/img/sirena.png";
    const fileInput = document.getElementById('photo') as HTMLInputElement;
    const img = document.getElementById('foto_perfil') as HTMLImageElement; // Usar HTMLImageElement en lugar de HTMLInputElement

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

  public editProfile(user_name: String, email: String, password: String, instagram: String, facebook: String, twitter: String, birth_date: Date, music_type: String, description: String){    
    let update_user = new User (this.userService.user.id_user,user_name, email, password, instagram, facebook, twitter, birth_date, music_type, description, null);
    const body = new FormData();
    body.append('photo', this.fileTmp);
    body.append('update_user', JSON.stringify(update_user));

    // this.userService.editProfile(update_user).subscribe((data: User) => {
    this.userService.editProfile(body).subscribe((data: User) => {
      this.userService.user = data;         
      this.userService.profile = data;
      
      Swal.fire({
        text: "Tu perfil ha sido editado con éxito",
        icon: 'success',
        confirmButtonText: 'Aceptar'
      });
      this.router.navigateByUrl('/profile');
    });
  }

  public volver(){
    this.router.navigateByUrl('/profile');
  }

}
