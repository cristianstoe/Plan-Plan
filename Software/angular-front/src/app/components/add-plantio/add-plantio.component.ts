import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/services/main.service';


@Component({
  selector: 'app-add-plantio',
  templateUrl: './add-plantio.component.html',
  styleUrls: ['./add-plantio.component.css']
})
export class AddPlantioComponent implements OnInit {

  baseUrl = 'http://localhost:8080/api/plantio';
  usersUrl = 'http://localhost:8080/api/users';
  productsUrl = 'http://localhost:8080/api/products'

  users: any;
  products: any;


  plantio = {
    produtoId: '',
    userId: '',
    quantidade: 0,
    data_plantio: ''
  };
  submitted = false;

  constructor(private mainService: MainService) { }


  ngOnInit(): void {
    this.retrieveUsers();
    this.retrieveProducts();
    console.log(this.users)
    console.log(this.products)
  }

  retrieveUsers(): void {
    this.mainService.getAll(this.usersUrl)
      .subscribe(
        data => {
          this.users = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  retrieveProducts(): void {
    this.mainService.getAll(this.productsUrl)
      .subscribe(
        data => {
          this.products = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  savePlantio(): void {
    const data = {
      produtoId: this.plantio.produtoId,
      userId: this.plantio.userId,
      quantidade: this.plantio.quantidade,
      data_plantio: this.plantio.data_plantio
    };

    this.mainService.create(data, this.baseUrl)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  onSelectProduct(value: string) {
    this.plantio.produtoId = value;
  }

  onSelectUser(value: string) {
    this.plantio.userId = value;
  }

}
