import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddAlunoComponent } from './components/add-aluno/add-aluno.component';
import { AlunosListComponent } from './components/alunos-list/alunos-list.component';
import { AlunosEditComponent } from './components/alunos-edit/alunos-edit.component';
import { FindByInstrumentComponent } from './components/find-by-instrument/find-by-instrument.component';
import { AddProdutoComponent } from './components/add-produto/add-produto.component';
import { ListProdutosComponent } from './components/list-produtos/list-produtos.component';

@NgModule({
  declarations: [
    AppComponent,
    AddAlunoComponent,
    AlunosListComponent,
    AlunosEditComponent,
    FindByInstrumentComponent,
    AddProdutoComponent,
    ListProdutosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
