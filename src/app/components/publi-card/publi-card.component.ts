import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-publi-card',
  templateUrl: './publi-card.component.html',
  styleUrls: ['./publi-card.component.css']
})
export class PubliCardComponent {
  @Input() publicacion: any; // Recibes los datos de la publicación desde el componente padre
}