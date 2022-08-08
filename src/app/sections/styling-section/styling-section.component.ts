import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { ElementStyle } from 'src/app/models/ElementStyle';
import { ElementsService } from 'src/app/services/elements.service';
import { editElement } from 'src/app/sections/State/elements.actions';
import { getElementStyleById } from '../State/elements.selector';
import { Observable, tap } from 'rxjs';

@Component({
  selector: 'app-styling-section',
  templateUrl: './styling-section.component.html',
  styleUrls: ['./styling-section.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StylingSectionComponent {
  public styleForm: FormGroup = new FormGroup({
    placeholderText: new FormControl(),
    width: new FormControl(),
    height: new FormControl(),
    required: new FormControl(),
    borderStyle: new FormControl(),
    fontSize: new FormControl(),
    fontWeight: new FormControl(),
    color: new FormControl(),
  });
  private elementStyle!: ElementStyle;

  public elementStyle$: Observable<ElementStyle | undefined> = this.store
    .pipe(select(getElementStyleById))
    .pipe(
      tap((style: ElementStyle | undefined) => {
        if (style) {
          this.elementStyle = style;
          this.updateForm(style);
        }
      })
    );

  constructor(
    private readonly store: Store,
    public elementsService: ElementsService
  ) {}

  public onFormSubmit() {
    const elementStyle: ElementStyle = {
      ...this.elementStyle,
      ...this.styleForm.value,
    };
    this.store.dispatch(editElement({ elementStyle }));
  }

  private updateForm(data: ElementStyle): void {
    return this.styleForm.patchValue({
      placeholderText: data.placeholderText,
      width: data.width,
      height: data.height,
      required: data.required,
      borderStyle: data.borderStyle,
      fontSize: data.fontSize,
      fontWeight: data.fontWeight,
      color: data.color,
    });
  }
}
