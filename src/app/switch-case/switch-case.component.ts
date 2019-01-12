import { Component, EventEmitter, Output, AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-switch-case',
  templateUrl: './switch-case.component.html',
  styleUrls: ['./switch-case.component.scss']
})
export class SwitchCaseComponent implements AfterContentInit {
  public escolhido = 'Curso Escolhido: ';
  public escolha: string;
  public cursos = ['', 'JavaScript', 'TypeScript', 'NodeJS', 'Angular', 'NativeScript', 'MongoDB'];
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
  ngAfterContentInit(): void {
    this.exportacaoLista();
  }
}
