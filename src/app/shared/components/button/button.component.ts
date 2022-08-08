import {
  ChangeDetectionStrategy,
  Component,
  Input,
} from '@angular/core';
import { ElementStyle } from 'src/app/models/ElementStyle';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
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
