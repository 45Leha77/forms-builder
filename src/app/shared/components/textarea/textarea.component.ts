import { Component, Input } from '@angular/core';
import { ElementStyle } from 'src/app/models/ElementStyle';

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss'],
})
export class TextareaComponent {
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
