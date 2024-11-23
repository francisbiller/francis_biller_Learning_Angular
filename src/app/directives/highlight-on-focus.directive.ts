import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appHighlightOnFocus]',
  standalone: true
})
export class HighlightOnFocusDirective {

  @Input() appHighlightOnFocus = '';

  constructor(private el: ElementRef) {
  }

  @HostListener('focus') onfocus() {
    this.focus(this.appHighlightOnFocus || 'yellow');
  }

  @HostListener('blur') blur() {
    this.focus('');
  }

  private focus(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
