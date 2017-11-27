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
			this.url = 'https://int02-e07d3.firebaseio.com/calendar/category/';
			this.getCategories();
	 }

	 public remove(key:string){
		 this.http.delete(this.url+key+'.json', {}).subscribe(data => {
 			alert("Categoria removido com sucesso!");
			this.getCategories();
 		});
	}

	 public edit(category:Category, key:string){

	 }

	 public newCategory(){
		  this.router.navigateByUrl('/categoria/cadastro');
	 }

	 public getCategories(){
		 this.http.get(this.url+'.json')
		 .subscribe(data => {
       this.categories = JSON.parse(data['_body']);
		 })
	 }
}
