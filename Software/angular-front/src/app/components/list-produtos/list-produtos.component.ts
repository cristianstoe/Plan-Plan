import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/services/main.service';


@Component({
  selector: 'app-list-produtos',
  templateUrl: './list-produtos.component.html',
  styleUrls: ['./list-produtos.component.css']
})
export class ListProdutosComponent implements OnInit {

  baseUrl = 'http://localhost:8080/api/products';
  produtos: any;
  currentProduto = null;
  currentIndex = -1;

  constructor(private mainService: MainService) { }

  ngOnInit(): void {
    this.retrieveProdutos();
  }

  retrieveProdutos(): void {
    this.mainService.getAll(this.baseUrl)
      .subscribe(
        data => {
          this.produtos = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  setActiveProduto(produto, index): void {
    this.currentProduto = produto;
    this.currentIndex = index;
  }

}
