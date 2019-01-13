import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appElementRef]'
})
export class ElementRefDirective {
  public elemento: any;
  constructor(public _elementRef: ElementRef) {
    this._elementRef.nativeElement.style.backgroundColor = 'pink';
  }
}
