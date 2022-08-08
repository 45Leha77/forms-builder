import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { changeCurrentId } from 'src/app/sections/State/elements.actions';
import { getElements } from 'src/app/sections/State/elements.selector';

@Component({
  selector: 'app-drag-section',
  templateUrl: './drag-section.component.html',
  styleUrls: ['./drag-section.component.scss'],
})
export class DragSectionComponent {
  elements$ = this.store.pipe(select(getElements));

  constructor(private store: Store) {}

  startEdit(id: string) {
    this.store.dispatch(changeCurrentId({ id }));
  }
}
