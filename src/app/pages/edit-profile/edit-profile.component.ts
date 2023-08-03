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

  constructor (public userService: UserService, public router: Router){
    this.profile = this.userService.user;
  }

  ngOnInit(): void {    
    const fechaInput = document.getElementById('fechaNacimiento') as HTMLInputElement;
    const year = this.profile.birth_date.getFullYear();
    const month = (this.profile.birth_date.getMonth() + 1).toString().padStart(2, '0');
    const day = this.profile.birth_date.getDate().toString().padStart(2, '0');
    const fechaPlaceholder = year + "-" + month + "-" + day;
    fechaInput.value = fechaPlaceholder;
  }

  public editProfile(user_name: String, email: String, password: String, instagram: String, facebook: String, twitter: String, birth_date: Date, music_type: String, description: String, photo: String){    
    let update_user = new User (null,user_name, email, password, instagram, facebook, twitter, birth_date, music_type, description, photo);
    
    this.userService.editProfile(update_user).subscribe((data: User) => {
        this.profile = data; 
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
