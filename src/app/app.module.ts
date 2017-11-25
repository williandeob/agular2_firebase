import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent }  from './app.component';
import { CategoriaListarComponent }  from './component/calendario/categoria.listar.component';
import { EventoListarComponent }  from './component/calendario/evento.listar.component';

const appRoutes: Routes = [
   { path: 'categoria', component: CategoriaListarComponent },
   { path: 'evento', component: EventoListarComponent },
];

@NgModule({
  imports:      [ BrowserModule, RouterModule.forRoot(appRoutes) ],
  declarations: [ AppComponent, CategoriaListarComponent, EventoListarComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
