import { Component, Input, Output, EventEmitter } from '@angular/core';



@Component({
  selector: 'app-publi-card',
  templateUrl: './publi-card.component.html',
  styleUrls: ['./publi-card.component.css']
})
export class PubliCardComponent {
  @Input() publicacion: any; // Recibes los datos de la publicación desde el componente padre
  @Output() publicacionClicked: EventEmitter<number> = new EventEmitter<number>();


  onPublicacionClick() {
    this.publicacionClicked.emit(this.publicacion.id_publicacion); // Emitir el ID de la publicación al componente padre
  }
}
