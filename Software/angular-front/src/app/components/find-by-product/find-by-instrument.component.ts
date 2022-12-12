import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-find-by-instrument',
  templateUrl: './find-by-instrument.component.html',
  styleUrls: ['./find-by-instrument.component.css']
})
export class FindByInstrumentComponent implements OnInit {

  base_url = 'http://localhost:8080/api/tutorials';
  produto = ["Alface"]

  currentUser = null;
  currentProduto = null;
  produtos: any;
  currentIndex = -1;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  onSelectProduto(value: string) {
    this.currentProduto = value;

    this.userService.findByProduto(value, this.base_url).subscribe(
      data => {
        console.log(data);
        this.produtos = data;
      },
      error => {
        console.log(error);
      }
    );
  }

  setActiveUser(user, index): void {
    this.currentUser = user;
    this.currentIndex = index;
  }
}
