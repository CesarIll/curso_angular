import {Directive, ElementRef, HostListener, Input, Output} from '@angular/core';

@Directive({
  selector: '[appNgColor]'
})
export class NgColorDirective {

  @HostListener('mouseenter') onMouseEnter(){
    console.log('Mouse Enter');
    this.changecolor('green');
  }

  @HostListener('mouseleave') onMouseLeave(){
    console.log('Mouse Leave');
    this.changecolor('yellow');
  }

  constructor(private el: ElementRef) {
    this.changecolor('yellow');
  }

  changecolor(color: string){
    this.el.nativeElement.style.backgroundColor = color;
  }

}
