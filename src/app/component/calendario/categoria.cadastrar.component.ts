import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from '../../model/Category';

@Component({
	selector: 'my-app',
	templateUrl: 'app/views/calendario/categoria.cadastrar.html'
})
export class CategoriaCadastrarComponent {
	category: Category;
	private url: string;

	constructor(private router: Router) {
		this.category = new Category('','#ffffff');
		this.url = 'http://int02-e07d3.firebaseio.com/calendar/category.json';
	}

	public backList(){
		 this.router.navigateByUrl('/categoria');
	}

	public save(){

	}
}
