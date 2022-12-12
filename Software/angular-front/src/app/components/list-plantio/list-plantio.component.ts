import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/services/main.service';


@Component({
  selector: 'app-list-plantio',
  templateUrl: './list-plantio.component.html',
  styleUrls: ['./list-plantio.component.css']
})
export class ListPlantioComponent implements OnInit {

  baseUrl = 'http://localhost:8080/api/plantio';
  plantios: any;
  currentPlantio = null;
  currentIndex = -1;

  constructor(private mainService: MainService) { }

  ngOnInit(): void {
    this.retrieveProdutos();
  }

  retrieveProdutos(): void {
    this.mainService.getAll(this.baseUrl)
      .subscribe(
        data => {
          this.plantios = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  setActiveProduto(plantio, index): void {
    this.currentPlantio = plantio;
    this.currentIndex = index;
  }

}
