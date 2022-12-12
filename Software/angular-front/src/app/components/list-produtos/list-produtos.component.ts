import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';


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

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.retrieveProdutos();
  }

  retrieveProdutos(): void {
    this.userService.getAll(this.baseUrl)
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
