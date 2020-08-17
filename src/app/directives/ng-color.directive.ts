import {Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[appNgColor]'
})
export class NgColorDirective {

  constructor(el: ElementRef) {
    el.nativeElement.style.backgroundColor = 'blue';
  }

}
