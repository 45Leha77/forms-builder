import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
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
  @Input() element!: ElementStyle;
  @Input() index!: Number;

  public onChange!: (value: string) => void;
  public writeValue(obj: any): void {
    return obj;
  }
  public registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }
  public registerOnTouched(fn: any): void {}

  public setInputStyle(elementStyle: ElementStyle) {
    const styles = {
      color: `${elementStyle.color}`,
      width: `${elementStyle.width}px`,
      height: `${elementStyle.height}px`,
      borderStyle: `${elementStyle.borderStyle}`,
      fontSize: `${elementStyle.fontSize}px`,
      fontWeight: `${elementStyle.fontWeight}`,
    };
    return styles;
  }
}
