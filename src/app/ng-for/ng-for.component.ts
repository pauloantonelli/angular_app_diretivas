import { Component, Input, AfterContentChecked } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.scss']
})
export class NgForComponent implements AfterContentChecked {
  @Input() listaBtn: [] = [];
  public lista: [] = [];
  constructor() { }
  recepcaoListaCursos(evento) {
    this.lista = evento;
    console.log(this.lista);
  }
  ngAfterContentChecked(): void {
    this.recepcaoListaCursos(this.listaBtn);
  }
}
