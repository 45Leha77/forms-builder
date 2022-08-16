import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ElementStyle } from 'src/app/models/ElementStyle';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RadioComponent {
  @Input() element: ElementStyle | null = null;

  public value: string = '';

  public onChange(value: string): void {
    this.value = value;
  }
}
