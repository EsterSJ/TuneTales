import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  public botonSeleccionado: number;

  constructor (){
    this.botonSeleccionado = 0;
  }

  public seleccionarBoton (indice: number){
    this.botonSeleccionado = indice;
  }

}
