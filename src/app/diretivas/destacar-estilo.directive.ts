import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[destacarEstilo]'
})
export class DestacarEstiloDirective {

  constructor(
    private elementRef: ElementRef
  ) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.transformar('bold', 'uppercase');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.transformar();
  }

  private transformar(
    fontWeight: string = null,
    textTransform: string = null
  ) {
    this.elementRef.nativeElement.style.fontWeight = fontWeight;
    this.elementRef.nativeElement.style.textTransform = textTransform;
  }
}
