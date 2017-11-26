import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from '../../model/Category';
import { Http } from '@angular/http';

@Component({
	selector: 'my-app',
	templateUrl: 'app/views/calendario/categoria.listar.html'
})
export class CategoriaListarComponent  {
	 Object = Object;
	 categories: Map<string, Category>;
	 private url: string;

	 constructor(private router: Router, private http: Http) {
		  this.categories = new Map<string, Category>();
			this.url = 'http://int02-e07d3.firebaseio.com/calendar/category.json';
			this.getCategories();
	 }

	 public newCategory(){
		  this.router.navigateByUrl('/categoria/cadastro');
	 }

	 public getCategories(){
		 this.http.get(this.url)
		 .subscribe(data => {
       this.categories = JSON.parse(data['_body']);
		 })
	 }

	 public setColor(color:string){
		 return {'color':color};
	 }
}
