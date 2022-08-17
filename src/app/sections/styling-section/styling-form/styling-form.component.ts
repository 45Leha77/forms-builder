import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable, tap } from 'rxjs';
import { ElementStyle } from 'src/app/models/ElementStyle';
import { ElementsService } from 'src/app/services/elements.service';
import { editElement } from '../../State/elements.actions';
import { getElementStyleByTitle } from '../../State/elements.selector';

@Component({
  selector: 'app-styling-form',
  templateUrl: './styling-form.component.html',
  styleUrls: ['./styling-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StylingFormComponent {
  private elementStyle: ElementStyle | null = null;
  public options: string[] = [];
  public styleForm: FormGroup = new FormGroup({
    placeholderText: new FormControl(null, [Validators.min(1)]),
    width: new FormControl(null, [Validators.required, Validators.min(1)]),
    height: new FormControl(null, [Validators.min(1)]),
    required: new FormControl(false),
    borderStyle: new FormControl(null),
    fontSize: new FormControl(null, [Validators.min(1)]),
    fontWeight: new FormControl(null),
    color: new FormControl(null, [Validators.minLength(1)]),
    label: new FormControl(null, [Validators.min(1)]),
  });

  public elementStyle$: Observable<ElementStyle | undefined> = this.store.pipe(
    select(getElementStyleByTitle),
    tap((style: ElementStyle | undefined) => {
      if (style) {
        this.elementStyle = style;
        this.updateForm(style);
        style.options ? (this.options = [...style.options]) : [];
      }
    })
  );

  constructor(
    private readonly store: Store,
    public elementsService: ElementsService
  ) {}

  public onFormSubmit() {
    if (this.styleForm.valid) {
      const elementStyle: ElementStyle = {
        ...this.elementStyle,
        ...this.styleForm.value,
        options: this.options,
      };
      this.store.dispatch(editElement({ elementStyle }));
    }
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
      label: data.label,
    });
  }

  public addOption(options: HTMLInputElement): void {
    this.options.push(options.value);
    options.value = '';
  }
}
