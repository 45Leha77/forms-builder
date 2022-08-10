import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ElementStyle } from 'src/app/models/ElementStyle';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputComponent {
  @Input() public element!: ElementStyle;

  public setInputStyle() {
    let styles = {
      color: `${this.element.color}`,
      width: `${this.element.width}px`,
      height: `${this.element.height}px`,
      borderStyle: `${this.element.borderStyle}`,
      fontSize: `${this.element.fontSize}px`,
      fontWeight: `${this.element.fontWeight}`,
    };
    return styles;
  }
}
