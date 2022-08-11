import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ElementStyle } from 'src/app/models/ElementStyle';

@Component({
  selector: 'custom-form-element',
  templateUrl: './custom-form-element.component.html',
  styleUrls: ['./custom-form-element.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomFormElementComponent {
  @Input() public element!: ElementStyle;
}
