import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ElementStyle } from 'src/app/models/ElementStyle';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectComponent {
  @Input() element: ElementStyle | null = null;

  public value: string = '';

  public onChange(value: string): void {
    this.value = value;
  }
}
