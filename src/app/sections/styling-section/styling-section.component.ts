import { ChangeDetectionStrategy, Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs/internal/Observable';
import { ElementStyle } from 'src/app/models/ElementStyle';
import { getElementStyleById } from '../State/elements.selector';

@Component({
  selector: 'app-styling-section',
  templateUrl: './styling-section.component.html',
  styleUrls: ['./styling-section.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StylingSectionComponent {
  public elementStyle$: Observable<ElementStyle | undefined> = this.store.pipe(
    select(getElementStyleById)
  );
  constructor(private readonly store: Store) {}
}
