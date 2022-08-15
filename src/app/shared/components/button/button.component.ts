import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { ElementStyle } from 'src/app/models/ElementStyle';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  @Input() public element!: ElementStyle;
  @Output() public submit: EventEmitter<void> = new EventEmitter<void>();

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

  public onButtonClick() {
    return this.submit.emit();
  }
}
