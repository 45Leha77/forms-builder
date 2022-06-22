import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ElementStyle } from 'src/app/models/ElementStyle';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputComponent {
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
