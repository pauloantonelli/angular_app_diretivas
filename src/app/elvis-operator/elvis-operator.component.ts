import { Component } from '@angular/core';

@Component({
  selector: 'app-elvis-operator',
  templateUrl: './elvis-operator.component.html',
  styleUrls: ['./elvis-operator.component.scss']
})
export class ElvisOperatorComponent {
  public pessoa: any = {
    cargo: 'CEO',
    id: {
      nome: 'Paulo',
      idade: 31,
      sexo: null
    }
  };
}
