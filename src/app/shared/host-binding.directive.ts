import { Directive, ElementRef, Renderer2, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHostBinding]'
})
export class HostBindingDirective {
  constructor(public _elementRef: ElementRef, public _renderer2: Renderer2) { }
  @HostBinding('class') icone = 'glyphicon glyphicon-glass';
  @HostListener('mouseenter') trocaIcone() {
    this.icone = 'glyphicon glyphicon-ok';
  }
  @HostListener('mouseleave') voltaIcone() {
    this.icone = 'glyphicon glyphicon-remove';
  }
}
