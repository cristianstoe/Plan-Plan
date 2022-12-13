import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-find-by-instrument',
  templateUrl: './find-by-instrument.component.html',
  styleUrls: ['./find-by-instrument.component.css'],
})
export class FindByInstrumentComponent implements OnInit {
  base_url = 'http://localhost:8080/api/products';
  plantioUrl = 'http://localhost:8080/api/plantio';

  currentUser = null;
  currentPlantio = null;
  plantios = null;
  produtos: any;
  currentIndex = -1;
  filteredPlantios = null;

  constructor(private mainService: MainService) {}

  ngOnInit(): void {
    this.retrieveProducts();
    this.retrieveUsers();
    console.log(this.plantios);
    console.log(this.produtos);
  }

  onSelectProduto(value: string) {
    this.filteredPlantios = this.plantios.filter(
      (plantio) => plantio.produtoId === value
    );

    console.log(value);
  }

  retrieveUsers(): void {
    this.mainService.getAll(this.plantioUrl).subscribe(
      (data) => {
        this.plantios = data;

        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  retrieveProducts(): void {
    this.mainService.getAll(this.base_url).subscribe(
      (data) => {
        this.produtos = data;
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  setActivePlantio(plantio, index): void {
    this.currentPlantio = plantio;
    this.currentIndex = index;
  }
}
