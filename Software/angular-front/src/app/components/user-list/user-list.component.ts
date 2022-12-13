import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/services/main.service';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  baseUrl = 'http://localhost:8080/api/users';
  users: any;
  currentUser = null;
  currentIndex = -1;

  constructor(private mainService: MainService) { }

  ngOnInit(): void {
    this.retrieveUsers();
  }

  retrieveUsers(): void {
    this.mainService.getAll(this.baseUrl)
      .subscribe(
        data => {
          this.users = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  setActiveUser(user, index): void {
    this.currentUser = user;
    this.currentIndex = index;
  }

}
