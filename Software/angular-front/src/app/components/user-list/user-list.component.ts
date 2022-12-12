import { Component, OnInit } from '@angular/core';
import { EscolaService } from 'src/app/services/escola.service';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  baseUrl = 'http://localhost:8080/api/tutorials';
  alunos: any;
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
          this.alunos = data;
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