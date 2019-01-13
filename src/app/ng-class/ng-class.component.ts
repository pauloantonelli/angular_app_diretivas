import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-class',
  templateUrl: './ng-class.component.html',
  styleUrls: ['./ng-class.component.scss']
})
export class NgClassComponent {
  public click: boolean;
  public clickado = [false, false, false, false, false];
  public numEstrela: number;
  public countEstrelas = [1, 2, 3, 4, 5];
  constructor() { }
  mudaClick() {
    this.click = !this.click;
  }

  reset() {
    for (let i = 0; i < this.clickado.length; i++) {
      this.clickado[i] = false;
    }
  }
  clickEstrela(estrela: number, num: number) {
    // estrela 1
    if (estrela === 1) {
      if (num === 0) {
        this.clickado[0] = true;
        this.clickado[1] = false;
        this.clickado[2] = false;
        this.clickado[3] = false;
        this.clickado[4] = false;
      }
    }
    // estrela 2
    if (estrela === 2) {
      if (num === 1) {
        this.clickado[0] = true;
        this.clickado[1] = true;
        this.clickado[2] = false;
        this.clickado[3] = false;
        this.clickado[4] = false;
      }
    }
    // estrela 3
    if (estrela === 3) {
      if (num === 2) {
        this.clickado[0] = true;
        this.clickado[1] = true;
        this.clickado[2] = true;
        this.clickado[3] = false;
        this.clickado[4] = false;
      }
    }
    // estrela 4
    if (estrela === 4) {
      if (num === 3) {
        this.clickado[0] = true;
        this.clickado[1] = true;
        this.clickado[2] = true;
        this.clickado[3] = true;
        this.clickado[4] = false;
      }
    }
    // estrela 5
    if (estrela === 5) {
      if (num === 4) {
        this.clickado[0] = true;
        this.clickado[1] = true;
        this.clickado[2] = true;
        this.clickado[3] = true;
        this.clickado[4] = true;
      }
    }
  }
}
