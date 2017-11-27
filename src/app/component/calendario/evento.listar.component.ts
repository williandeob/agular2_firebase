import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Event } from '../../model/Event';

@Component({
	selector: 'my-app',
	templateUrl: 'app/views/calendario/evento.listar.html'
})
export class EventoListarComponent implements OnInit{
	Object = Object;
	dataIni:Date;
	dataFim:Date;
	private url: string;
	events: Map<string, Event>;

	constructor(private http: Http){
		this.dataIni = new Date();
		this.dataFim = new Date();
		this.url = 'http://int02-e07d3.firebaseio.com/calendar/events.json';
		this.events = new Map<string, Event>();
	}

	public getEvents(){
		this.http.get(this.url)
		.subscribe(data => {
			this.events = JSON.parse(data['_body']);
		})
	}

	ngOnInit() {
     this.getEvents();
  }

}
