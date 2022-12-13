import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/services/main.service';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  baseUrl = 'http://localhost:8080/api/users';
  user = {
    cpf: '',
    nome: '',
    privilegio: 'produtor',
  };
  submitted = false;

  privilegio = ["produtor", "administrador"]

  constructor(private mainService: MainService) { }

  ngOnInit(): void {
  }

  saveUser(): void {
    const data = {
      cpf: this.user.cpf,
      nome: this.user.nome,
      privilegio: this.user.privilegio
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
    this.user.privilegio = value;
  }

}
