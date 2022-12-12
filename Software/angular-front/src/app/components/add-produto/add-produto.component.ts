import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/services/main.service';


@Component({
  selector: 'app-add-produto',
  templateUrl: './add-produto.component.html',
  styleUrls: ['./add-produto.component.css']
})
export class AddProdutoComponent implements OnInit {

  baseUrl = 'http://localhost:8080/api/products';

  produto = {
    id: '',
    nome: '',
    tempo_colheita: 0,
    epoca: ''
  };
  submitted = false;

  epoca = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro" ]

  constructor(private mainService: MainService) { }

  ngOnInit(): void {
  }

  saveProduto(): void {
    const data = {
      id: this.produto.id,
      nome: this.produto.nome,
      tempo_colheita: this.produto.tempo_colheita,
      epoca: this.produto.epoca
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

  onSelectInstrument(value: string) {
    this.produto.epoca = value;
  }

}
