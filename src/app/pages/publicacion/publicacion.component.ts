import { NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Publicacion } from 'src/app/models/publicacion';
import { PublicationService } from 'src/app/shared/publication.service';

@Component({
  selector: 'app-publicacion',
  templateUrl: './publicacion.component.html',
  styleUrls: ['./publicacion.component.css']
})
export class PublicacionComponent implements OnInit{

  public letra:boolean = false;
  public publicacion:Publicacion;
  public id_publicacion:number;
  public selectedItem: number = null;



  constructor(private router: Router, public publicationService:PublicationService, private formBuilder: FormBuilder,public Http:HttpClient, public activatedRoute: ActivatedRoute) {
    }
  
    ngOnInit(): void {
      this.publicacion = this.publicationService.getPublicacion()
    }
  
    loadPublication(id_publicacion: number): void {
      this.publicationService.getPublicationById(id_publicacion).subscribe((data: Publicacion) => {
        this.publicacion = data;
      });
    }
    //   0,
    //   0,
    //   "https://soundcloud.com/officialpinkfloyd/coming-back-to-life-2011?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
    //   "Coming Back to Life",
    //   "Where were you When I was burned and broken? While the days slipped by From my window watching And where were you When I was hurt and I was helpless? 'Cause the things you say And the things you do surround me While you were hanging yourself On someone else's words Dying to believe in what you heard I was staring straight into the shining Sun Lost in thought and lost in time While the seeds of life And the seeds of change were planted Outside, the rain fell dark and slow While I pondered on this dangerous But irresistible pastime I took a heavenly ride through our silence I knew the moment had arrived For killing the past and coming back to life I took a heavenly ride through our silence I knew the waiting had begun And headed straight into the shining Sun",
    //   "Gilmour dijo (como puede oírse en el DVD David Gilmour in Concert) que la canción fue escrita acerca de su esposa, Polly Samson. La canción está en Do mayor. Empieza con un zumbido de sintetizador en Do mayor, seguido de un solo tranquilo de guitarra tocado con un sonido limpio. El primer verso es cantado lentamente sobre los acordes del sintetizador, antes de que aparezca el ritmo principal, y que el resto de la banda se junte al arreglo. Otro verso es cantado, y seguido por un solo de guitarra. Después de eso, las últimas líneas del verso son cantadas nuevamente, y luego otro solo de guitarra con el ritmo principal es tocado hasta el final de la canción.",
    //   17,
    // );
  //   this.publicationService.getPublication(this.id_publicacion);
  // }

  // ngOnInit(): void {

  // }

  public selectElement(element:number): void {
    this.selectedItem = element;
  }

}
