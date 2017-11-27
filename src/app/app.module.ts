import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { CategoriaListarComponent }  from './component/calendario/categoria.listar.component';
import { CategoriaCadastrarComponent }  from './component/calendario/categoria.cadastrar.component';
import { EventoListarComponent }  from './component/calendario/evento.listar.component';
import { EventoCadastrarComponent }  from './component/calendario/evento.cadastrar.component';

const appRoutes: Routes = [
   { path: 'categoria', component: CategoriaListarComponent },
   { path: 'categoria/cadastro', component: CategoriaCadastrarComponent },
   { path: 'evento', component: EventoListarComponent },
   { path: 'evento/cadastro', component: EventoCadastrarComponent },
];

@NgModule({
  imports:      [ BrowserModule, RouterModule.forRoot(appRoutes), HttpModule, FormsModule],
  declarations: [ AppComponent, CategoriaListarComponent, CategoriaCadastrarComponent, EventoListarComponent, EventoCadastrarComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
