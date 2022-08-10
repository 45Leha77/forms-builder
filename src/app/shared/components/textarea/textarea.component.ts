import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ElementStyle } from 'src/app/models/ElementStyle';

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextareaComponent {
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
