import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public titulo = 'Aplicativo das diretivas';
  lista2: any [] = [];
  buildLista(evento) {
    for (let i = 0; i < evento.listaCurso.length; i ++) {
      this.lista2[i] = evento.listaCurso[i];
    console.log(evento.listaCurso[i]);
    }
    console.log(this.lista2);
  }
  constructor() {
  }
  ngOnInit() {

  }
}
