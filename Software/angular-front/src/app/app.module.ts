import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { FindByInstrumentComponent } from './components/find-by-product/find-by-instrument.component';
import { AddProdutoComponent } from './components/add-produto/add-produto.component';
import { ListProdutosComponent } from './components/list-produtos/list-produtos.component';

@NgModule({
  declarations: [
    AppComponent,
    AddUserComponent,
    UserListComponent,
    UserEditComponent,
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
