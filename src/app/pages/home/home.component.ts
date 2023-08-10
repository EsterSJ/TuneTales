import { Component, OnInit } from '@angular/core';
import { Top3PublicacionesService } from 'src/app/shared/publication.service'; 

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  top3Publicaciones: any[] = []; // Aquí almacenarás las publicaciones

  constructor(private top3Service: Top3PublicacionesService) { }

  ngOnInit() {
    this.top3Service.getTop3Publicaciones().subscribe(
      (data: any) => {
        this.top3Publicaciones = data;
      });
  }
}