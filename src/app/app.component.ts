import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  lista2: [];
  transfLista(evento) {
    this.lista2 = evento;
    console.log(this.lista2);
  }
  buildLista(evento) {
    console.log(evento);
  }
  constructor() {
    this.buildLista();
  }
  ngOnInit() {

  }
}
