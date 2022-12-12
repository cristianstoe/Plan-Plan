import { Component, OnInit } from '@angular/core';
import { EscolaService } from 'src/app/services/escola.service';

@Component({
  selector: 'app-find-by-instrument',
  templateUrl: './find-by-instrument.component.html',
  styleUrls: ['./find-by-instrument.component.css']
})
export class FindByInstrumentComponent implements OnInit {

  base_url = 'http://localhost:8080/api/tutorials';
  instrumentos = ["Alface"]

  currentAluno = null;
  currentInstrumento = null;
  produtos: any;
  currentIndex = -1;

  constructor(private escolaService: EscolaService) { }

  ngOnInit(): void {
  }

  onSelectInstrument(value: string) {
    this.currentInstrumento = value;

    this.escolaService.findByInstrument(value, this.base_url).subscribe(
      data => {
        console.log(data);
        this.produtos = data;
      },
      error => {
        console.log(error);
      }
    );
  }

  setActiveAluno(aluno, index): void {
    this.currentAluno = aluno;
    this.currentIndex = index;
  }
}
