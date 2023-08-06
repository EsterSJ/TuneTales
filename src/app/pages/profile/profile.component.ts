import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  public botonSeleccionado: number;

  constructor (private router: Router){
    this.botonSeleccionado = 0;
  }

  public seleccionarBoton (indice: number){
    this.botonSeleccionado = indice;
  }

  public goEditProfile(){
    this.router.navigateByUrl('/editProfile');
  }

}
