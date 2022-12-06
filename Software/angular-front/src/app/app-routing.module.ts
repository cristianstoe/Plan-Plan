import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddAlunoComponent } from './components/add-aluno/add-aluno.component';
import { AlunosListComponent } from './components/alunos-list/alunos-list.component';
import { AlunosEditComponent } from './components/alunos-edit/alunos-edit.component';
import { FindByInstrumentComponent } from './components/find-by-instrument/find-by-instrument.component';
import { AddProdutoComponent } from './components/add-produto/add-produto.component';
import { ListProdutosComponent } from './components/list-produtos/list-produtos.component';

const routes: Routes = [
  { path: '', redirectTo: 'alunos', pathMatch: 'full' },
  { path: 'alunos', component: AlunosListComponent },
  { path: 'produtos', component: ListProdutosComponent },
  { path: 'editar', component: AlunosEditComponent },
  { path: 'add', component: AddAlunoComponent },
  { path: 'add-produto', component: AddProdutoComponent},
  { path: 'findBy', component: FindByInstrumentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
