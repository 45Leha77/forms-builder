import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { interval } from 'rxjs';
import { ElementStyle } from 'src/app/models/ElementStyle';
import { changeCurrentId } from 'src/app/sections/State/elements.actions';
import { getElements } from 'src/app/sections/State/elements.selector';

@Component({
  selector: 'app-drag-section',
  templateUrl: './drag-section.component.html',
  styleUrls: ['./drag-section.component.scss'],
})
export class DragSectionComponent {
  elements$ = this.store.select(getElements);

  constructor(private store: Store) {}

  startEdit(id: string) {
    this.store.dispatch(changeCurrentId({ id }));
  }
}
