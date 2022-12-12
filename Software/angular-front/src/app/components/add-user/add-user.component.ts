import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  baseUrl = 'http://localhost:8080/api/tutorials';
  user = {
    cpf: '',
    nome: '',
    privilegio: 'produtor',
  };
  submitted = false;

  privilegio = ["produtor", "administrador"]

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  saveTutorial(): void {
    const data = {
      cpf: this.user.cpf,
      nome: this.user.nome,
      privilegio: this.user.privilegio
    };

    this.userService.create(data, this.baseUrl)
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
