import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-tarjeta-evento-perfil',
  templateUrl: './tarjeta-evento-perfil.component.html',
  styleUrls: ['./tarjeta-evento-perfil.component.css']
})
export class TarjetaEventoPerfilComponent {
  @Input() evento: any; // Recibes los datos del evento desde el componente padre

  
  getFormattedDate(dateStr: string): string {
    const date = new Date(dateStr);
    const day = date.getDate();
    const month = date.getMonth() + 1; // Los meses en JavaScript van de 0 a 11
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }

}