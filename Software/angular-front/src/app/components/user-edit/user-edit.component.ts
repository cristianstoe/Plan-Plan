import { Component, OnInit } from '@angular/core';
import { EscolaService } from 'src/app/services/escola.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {


  baseUrl = 'http://localhost:8080/api/tutorials';

  alunos: any;
  currentAluno = null;
  message = '';
  novaMensalidade = null;
  newAluno = null;
  currentIndex = -1;

  constructor(
    private escolaService: EscolaService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.message = '';
    this.retrieveAlunos()
  }

  setActiveAluno(aluno, index): void {
    this.currentAluno = aluno;
    this.currentIndex = index;
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

  updateAluno(): void {
    this.newAluno = {
      ...this.currentAluno,
      mensalidade: this.novaMensalidade,
    }

    this.escolaService.update(this.currentAluno.cpf, this.newAluno, this.baseUrl)
      .subscribe(
        response => {
          console.log(response);
          this.message = 'A mensalidade foi atualizada!';
        },
        error => {
          console.log(error);
        });
  }

}
