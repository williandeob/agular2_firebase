import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from '../../model/Category';

@Component({
	selector: 'my-app',
	templateUrl: 'app/views/calendario/categoria.cadastrar.html'
})
export class CategoriaCadastrarComponent {
	category: Category;
	constructor(private router: Router) {
		this.category = new Category('','#ffffff');
	}

	public backList(){
		 this.router.navigateByUrl('/categoria');
	}

	public save(){

	}
}
