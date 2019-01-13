import { Directive, ElementRef, Renderer2, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHostBindingExtra]'
})
export class HostBindingExtraDirective {
  constructor(public _elementRef: ElementRef, public _renderer2: Renderer2) { }
  @HostBinding('value') valor = 'passe o mouse <--.-->';
  @HostListener('mouseenter') trocaTexto() {
    this.valor = 'Mouse em cima';
  }
  @HostListener('mouseleave') voltaTexto() {
    this.valor = 'Mouse saiu';
  }
}
