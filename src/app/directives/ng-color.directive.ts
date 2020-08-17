import {Directive, ElementRef, HostListener, Input, Output} from '@angular/core';

@Directive({
  selector: '[appNgColor]'
})
export class NgColorDirective {

  @Input('appNgColor') color: string;
  @Input() secondColor: string;

  @HostListener('mouseenter') onMouseEnter(){
    console.log('Mouse Enter');
    this.changecolor(this.color);
  }

  @HostListener('mouseleave') onMouseLeave(){
    console.log('Mouse Leave');
    this.changecolor(this.secondColor);
  }

  constructor(private el: ElementRef) {
  }

  changecolor(color: string){
    this.el.nativeElement.style.backgroundColor = color;
  }

}
