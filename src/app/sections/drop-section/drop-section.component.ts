import { CdkDragDrop, copyArrayItem } from '@angular/cdk/drag-drop';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ElementStyle } from 'src/app/models/ElementStyle';

@Component({
  selector: 'app-drop-section',
  templateUrl: './drop-section.component.html',
  styleUrls: ['./drop-section.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DropSectionComponent {
  elements: ElementStyle[] = [];

  drop(event: CdkDragDrop<any[]>) {
    copyArrayItem(
      event.previousContainer.data,
      event.container.data,
      event.previousIndex,
      event.currentIndex
    );
    // console.log(event.container.element.nativeElement);
  }

  setInputStyle(elementStyle: ElementStyle) {
    let styles = {
      color: `${elementStyle.color}`,
      width: `${elementStyle.width}px`,
      height: `${elementStyle.height}px`,
      borderStyle: `${elementStyle.borderStyle}`,
      fontSize: `${elementStyle.fontSize}px`,
      fontWeight: `${elementStyle.fontWeight}`,
    };
    return styles;
  }
}
