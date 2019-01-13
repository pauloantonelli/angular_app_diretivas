import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[appTitulo]'
})
export class TituloDirective {

  constructor() { }
  @HostBinding('style.fontWeight') pesoFonte = 'bold';
  @HostBinding('style.fontSize') tamanhoFonte = '1.2 rem';
}
