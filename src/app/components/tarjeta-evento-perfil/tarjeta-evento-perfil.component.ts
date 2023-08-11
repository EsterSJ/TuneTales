import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-tarjeta-evento-perfil',
  templateUrl: './tarjeta-evento-perfil.component.html',
  styleUrls: ['./tarjeta-evento-perfil.component.css']
})
export class TarjetaEventoPerfilComponent {
  @Input() evento: any; // Recibes los datos del evento desde el componente padre

}
