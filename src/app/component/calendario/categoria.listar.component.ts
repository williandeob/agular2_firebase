import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from '../../model/Category';

@Component({
	selector: 'my-app',
	templateUrl: 'app/views/calendario/categoria.listar.html'
})
export class CategoriaListarComponent  {
	 constructor(private router: Router) {}
	 categories: Array<Category> = [];
	 public newCategory(){
		  this.router.navigateByUrl('/categoria/cadastro');
	 }
}
