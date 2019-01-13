import { Directive, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHostListener]'
})
export class HostListenerDirective {

  constructor(public _elementRef: ElementRef, public _renderer2: Renderer2) { }
  @HostListener('mouseenter') trocarCor() {
    // this._renderer2.setValue(this._elementRef.nativeElement, 'Mouse em cima!');
    this._renderer2.setStyle(this._elementRef.nativeElement, 'backgroundColor', 'red');
  }
  @HostListener('mouseleave') voltaCor() {
    // this._renderer2.setValue(this._elementRef.nativeElement, 'Mouse saiu!');
    this._renderer2.setStyle(this._elementRef.nativeElement, 'backgroundColor', 'white');
  }
}
