import { Component, EventEmitter, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-switch-case',
  templateUrl: './switch-case.component.html',
  styleUrls: ['./switch-case.component.scss']
})
export class SwitchCaseComponent implements OnInit {
  public escolhido = 'Curso Escolhido: ';
  public escolha: string;
  public cursos = ['', 'JavaScript', 'TypeScript', 'NodeJS', 'Angular', 'NativeScript'];
  @Output() lista = new EventEmitter();
  constructor() {  }
  exportacaoLista() {
    const listaCurso = this.cursos;
    listaCurso.splice(0, 1);
    this.lista.emit({ listaCurso });
  }
  escolhaCurso(curso) {
    this.escolha = curso;
  }
  ngOnInit(): void {
    this.exportacaoLista();
  }
}
