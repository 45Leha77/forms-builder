import { ChangeDetectionStrategy, Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ElementStyle } from 'src/app/models/ElementStyle';
import { changeCurrentId } from 'src/app/sections/State/elements.actions';
import { getElements } from 'src/app/sections/State/elements.selector';

@Component({
  selector: 'app-drag-section',
  templateUrl: './drag-section.component.html',
  styleUrls: ['./drag-section.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DragSectionComponent {
  public elements$: Observable<ElementStyle[]> = this.store.pipe(
    select(getElements)
  );
  constructor(private store: Store) {}

  public startEdit(id: string): void {
    this.store.dispatch(changeCurrentId({ id }));
  }
}
