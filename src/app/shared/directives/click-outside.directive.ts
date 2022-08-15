import {
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Output,
} from '@angular/core';

@Directive({
  selector: '[clickOutside]',
})
export class ClickOutsideDirective {
  @Output() public clickOutside: EventEmitter<void> = new EventEmitter<void>();

  constructor(private elementRef: ElementRef) {}

  @HostListener('document:click', ['$event.target'])
  public onClick(target: HTMLElement): void {
    const isClickedInside: boolean =
      this.elementRef.nativeElement.contains(target);
    if (!isClickedInside) {
      this.clickOutside.emit();
    }
  }
}
