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

  public setInputStyle(elementStyle: ElementStyle) {
    let styles = {
      width: `${elementStyle.width}px`,
      height: `${elementStyle.height}px`,
      borderStyle: `${elementStyle.borderStyle}`,
      fontSize: `${elementStyle.fontSize}px`,
      fontWeight: `${elementStyle.fontWeight}`,
    };
    return styles;
  }
}
