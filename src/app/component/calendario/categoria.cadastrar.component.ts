import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from '../../model/Category';
import { Http } from '@angular/http';

@Component({
	selector: 'my-app',
	templateUrl: 'app/views/calendario/categoria.cadastrar.html'
})
export class CategoriaCadastrarComponent {
	category: Category;
	private url: string;

	constructor(private router: Router, private http: Http) {
		this.category = new Category('','#000000');
		this.url = 'http://int02-e07d3.firebaseio.com/calendar/category.json';
	}

	public backList(){
		 this.router.navigateByUrl('/categoria');
	}

	public save(){
		this.category.name = 'Eventos UFG';
		this.category.color = '#2900ff';
		this.http.post(this.url, JSON.stringify(this.category), {}).subscribe();
	}
}
