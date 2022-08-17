import { ChangeDetectionStrategy, Component, Input, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ElementStyle } from 'src/app/models/ElementStyle';

@Component({
  selector: 'app-dynamic-form-control',
  templateUrl: './dynamic-form-control.component.html',
  styleUrls: ['./dynamic-form-control.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: DynamicFormControlComponent,
      multi: true,
    },
  ],
})
export class DynamicFormControlComponent implements ControlValueAccessor {
  @Input() element: ElementStyle | null = null;

  public onChange!: (value: string) => void;
  public writeValue(obj: any): void {
    return obj;
  }
  public registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }
  public registerOnTouched(fn: any): void {}
}
