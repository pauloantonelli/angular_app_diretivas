import { Component } from '@angular/core';

@Component({
  selector: 'app-ngif-ngelse',
  templateUrl: './ngif-ngelse.component.html',
  styleUrls: ['./ngif-ngelse.component.scss']
})
export class NgifNgelseComponent {
  public cursos: boolean;

  trocarValor() {
    this.cursos = !this.cursos;
  }
}
