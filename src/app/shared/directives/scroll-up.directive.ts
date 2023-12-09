import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appScrollUp]'
})
export class ScrollUpDirective {

  constructor(private element: ElementRef, private renderer: Renderer2) {
    this.renderer.setStyle(this.element.nativeElement, "display", 'none');
  }

  @HostListener('click')
  scrollUp() {
    document.scrollingElement?.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  @HostListener('window:scroll')
  displayBtn() {
    const scrollY = +window.scrollY;
    if (scrollY > 100) {
      this.renderer.setStyle(this.element.nativeElement, "display", 'grid');
    } else {
      this.renderer.setStyle(this.element.nativeElement, "display", 'none');
    }
  }

}
