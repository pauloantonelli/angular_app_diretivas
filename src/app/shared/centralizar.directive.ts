import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[appCentralizar]'
})
export class CentralizarDirective {
  @HostBinding('style.text-align') alinhamento = 'center';
  constructor() { }

}
