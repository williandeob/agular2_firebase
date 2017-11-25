import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<nav class="navbar navbar-inverse navbar-fixed-top">
	  <div class="container">
		<div class="navbar-header">
		  <a class="navbar-brand" href="#">Calendário MinhaUfg</a>
		</div>
		<div>
		  <ul class="nav navbar-nav">
		  	<li><a [routerLink]="['/categoria']">Categoria</a></li>
			<li><a [routerLink]="['/evento']">Eventos</a></li>
		  </ul>
		</div>
	  </div>
	</nav>
    <br /><br /><br />
	<router-outlet></router-outlet>`,
})
export class AppComponent  { name = 'Angular'; }
