import { Component, OnInit } from '@angular/core';
import { EscolaService } from 'src/app/services/escola.service';


@Component({
  selector: 'app-list-produtos',
  templateUrl: './list-produtos.component.html',
  styleUrls: ['./list-produtos.component.css']
})
export class ListProdutosComponent implements OnInit {

  baseUrl = 'http://localhost:8080/api/products';
  produtos: any;
  currentAluno = null;
  currentIndex = -1;

  constructor(private escolaService: EscolaService) { }

  ngOnInit(): void {
    this.retrieveAlunos();
  }

  retrieveAlunos(): void {
    this.escolaService.getAll(this.baseUrl)
      .subscribe(
        data => {
          this.produtos = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  setActiveAluno(aluno, index): void {
    this.currentAluno = aluno;
    this.currentIndex = index;
  }

}
