import { Directive, HostListener, HostBinding, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCollapseOnClick]'
})
export class CollpaseOnClickDirective {

  @HostBinding('style.display') display;
  
  @HostListener('click') onClickHandler (){
    console.log("Click !");
    //this.display = 'none';
    this.element.nativeElement.style.display = 'none';
  }
  constructor(private element: ElementRef) { 
    this.element = element;
    console.log("Init cOC directive", this.element);
  }

}
