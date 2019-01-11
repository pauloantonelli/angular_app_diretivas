import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.scss']
})
export class NgForComponent implements OnChanges {
  @Input() listaBtn: [];
  public lista: [] = [];
  constructor() { }
  recepcaoListaCursos(evento) {
    this.lista = this.listaBtn;
  }
  ngOnChanges() {
    this.recepcaoListaCursos(this.listaBtn);
  }
}
