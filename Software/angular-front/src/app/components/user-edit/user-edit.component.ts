import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {


  baseUrl = 'http://localhost:8080/api/tutorials';

  users: any;
  currentUser = null;
  message = '';
  novaMensalidade = null;
  newUser = null;
  currentIndex = -1;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.message = '';
    this.retrieveUsers()
  }

  setActiveUser(user, index): void {
    this.currentUser = user;
    this.currentIndex = index;
  }

  retrieveUsers(): void {
    this.userService.getAll(this.baseUrl)
      .subscribe(
        data => {
          this.users = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  updateUser(): void {
    this.newUser = {
      ...this.currentUser,
      mensalidade: this.novaMensalidade,
    }

    this.userService.update(this.currentUser.cpf, this.newUser, this.baseUrl)
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
