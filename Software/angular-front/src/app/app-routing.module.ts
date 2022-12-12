import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddUserComponent } from './components/add-user/add-user.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { FindByInstrumentComponent } from './components/find-by-product/find-by-instrument.component';
import { AddProdutoComponent } from './components/add-produto/add-produto.component';
import { ListProdutosComponent } from './components/list-produtos/list-produtos.component';

const routes: Routes = [
  { path: '', redirectTo: 'alunos', pathMatch: 'full' },
  { path: 'alunos', component: UserListComponent },
  { path: 'produtos', component: ListProdutosComponent },
  { path: 'editar', component: UserEditComponent },
  { path: 'add', component: AddUserComponent },
  { path: 'add-produto', component: AddProdutoComponent},
  { path: 'findBy', component: FindByInstrumentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
