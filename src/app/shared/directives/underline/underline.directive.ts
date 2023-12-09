import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appUnderline]'
})
export class UnderlineDirective {

  constructor(private element: ElementRef, private renderer: Renderer2) {
    this.initialState();
  }

  initialState() {
    this.renderer.setStyle(this.element.nativeElement, "background", 'linear-gradient(to right, var(--main-color) 0%, var(--black-color) 100%)');
    this.renderer.setStyle(this.element.nativeElement, "background-size", '30px 6%');
    this.renderer.setStyle(this.element.nativeElement, "background-repeat", 'no-repeat');
    this.renderer.setStyle(this.element.nativeElement, "transition-duration", '0.5s');
    this.renderer.setStyle(this.element.nativeElement, "background-position", '0 100%');
  }

  @HostListener('mouseover')
  underlineEffect() {
    this.renderer.setStyle(this.element.nativeElement, "background-size", '100% 6%');
  }

  @HostListener('mouseleave')
  underlineEffectOnLeave() {
    this.renderer.setStyle(this.element.nativeElement, "background-size", '30px 6%');
  }

}
