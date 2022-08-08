import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ElementStyle } from 'src/app/models/ElementStyle';

@Component({
  selector: 'custom-form-element',
  templateUrl: './custom-form-element.component.html',
  styleUrls: ['./custom-form-element.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomFormElementComponent {
  @Input() elementStyle!: ElementStyle;

  setInputStyle() {
    let styles = {
      color: `${this.elementStyle.color}`,
      width: `${this.elementStyle.width}px`,
      height: `${this.elementStyle.height}px`,
      borderStyle: `${this.elementStyle.borderStyle}`,
      fontSize: `${this.elementStyle.fontSize}px`,
      fontWeight: `${this.elementStyle.fontWeight}`,
    };
    return styles;
  }
}
