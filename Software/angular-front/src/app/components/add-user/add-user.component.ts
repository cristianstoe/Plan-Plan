import { Component, OnInit } from '@angular/core';
import { EscolaService } from 'src/app/services/escola.service';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  baseUrl = 'http://localhost:8080/api/tutorials';
  aluno = {
    cpf: '',
    nome: '',
    privilegio: 'produtor',
  };
  submitted = false;

  instrumentos = ["produtor", "administrador"]

  constructor(private escolaService: EscolaService) { }

  ngOnInit(): void {
  }

  saveTutorial(): void {
    const data = {
      cpf: this.aluno.cpf,
      nome: this.aluno.nome,
      privilegio: this.aluno.privilegio
    };

    this.escolaService.create(data, this.baseUrl)
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
    this.aluno.privilegio = value;
  }

}
