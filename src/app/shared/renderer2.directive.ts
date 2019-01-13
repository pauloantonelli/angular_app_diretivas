import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appRenderer2]'
})
export class Renderer2Directive {

  constructor(public _elementRef: ElementRef, public _renderer2: Renderer2) {
    this._renderer2.setStyle(this._elementRef.nativeElement, 'color', 'red');
    this._renderer2.setStyle(this._elementRef.nativeElement, 'fontSize', '1.4rem');
    this._renderer2.setStyle(this._elementRef.nativeElement, 'fontWeight', 'bolder');
   }

}
