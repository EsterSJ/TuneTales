import { Component, OnInit } from '@angular/core';
import { PublicationService } from 'src/app/shared/publication.service'; 

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  top3Publicaciones: any[] = []; // Aquí almacenarás las publicaciones

  constructor(private top3Service: PublicationService) { }

  ngOnInit() {
    this.top3Service.getTop3Publicaciones().subscribe(
      (data: any) => {
        this.top3Publicaciones = data;
      } 
    );
  }
}