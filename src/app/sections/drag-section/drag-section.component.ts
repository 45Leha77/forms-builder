import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { ElementStyle } from 'src/app/models/ElementStyle';
import { getElements } from 'src/app/State/elements.selector';

@Component({
  selector: 'app-drag-section',
  templateUrl: './drag-section.component.html',
  styleUrls: ['./drag-section.component.scss'],
})
export class DragSectionComponent implements AfterViewInit, OnInit, OnDestroy {
  // @ViewChild('input') input!: ElementRef;

  elements!: ElementStyle[];

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.subscribeToElements();
  }

  subscribeToElements() {
    return this.store.select(getElements).subscribe((elements) => {
      this.elements = elements;
    });
  }

  ngAfterViewInit(): void {
    // console.log(this.input.nativeElement);
  }

  ngOnDestroy(): void {
    this.subscribeToElements().unsubscribe();
  }
}
