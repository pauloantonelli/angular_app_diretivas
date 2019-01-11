import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html',
  styleUrls: ['./ng-if.component.scss']
})
export class NgIfComponent {
  public title = 'App Diretivas';
  public mostrarLogo = true;

  constructor() {}
  ctrlLogo() {
    this.mostrarLogo = !this.mostrarLogo;
  }

}
