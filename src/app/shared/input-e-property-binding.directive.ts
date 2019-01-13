import { Directive, ElementRef, Renderer2, HostListener, HostBinding, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appInputEPropertyBinding]'
})
export class InputEPropertyBindingDirective implements OnInit {
  constructor(public _elementRef: ElementRef, public _renderer2: Renderer2) { }
  public cor: string;
  @Input() corPadrao = 'white';
  @Input() corAlterada = 'purple';

  @HostBinding('style.backgroundColor') get mudaCor() {
    return this.cor;
  }
  @HostBinding('value') texto = 'passe o mouse';
  @HostBinding('style.color') corTexto = 'white';
  @HostListener('mouseenter') trocaCor() {
    this.cor = this.corAlterada;
  }
  @HostListener('mouseleave') voltaCor() {
    this.cor = this.corPadrao;
  }
  ngOnInit(): void {
    this.cor = this.corPadrao;
  }
}
