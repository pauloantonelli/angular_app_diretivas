import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  templateUrl: './ng-style.component.html',
  styleUrls: ['./ng-style.component.scss']
})
export class NgStyleComponent {
  // style binding
  public tamanhoFonte: string;
  public _corFundo: boolean;
  public _cor: boolean;
  public _peso: boolean;

  // ng-style
  public corInput: boolean;
  public corSlide: boolean;
  public fontePeso: boolean;
  public fonteSizes: string;
  // style binding
  corFundo() {
    this._corFundo = !this._corFundo;
  }
  cor() {
    this._cor = !this._cor;
  }
  pesofonte() {
    this._peso = !this._peso;
  }
  // ng-style
  corSlider() {
    this.corInput = !this.corInput;
    this.corSlide = !this.corSlide;
    this.fontePeso = !this.fontePeso;
  }
}
