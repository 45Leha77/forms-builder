import {
  CdkDragDrop,
  copyArrayItem,
  moveItemInArray,
} from '@angular/cdk/drag-drop';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ElementStyle } from 'src/app/models/ElementStyle';

@Component({
  selector: 'app-drop-section',
  templateUrl: './drop-section.component.html',
  styleUrls: ['./drop-section.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DropSectionComponent {
  public elements: ElementStyle[] = [];
  public customForm: FormGroup = new FormGroup({});

  private formControlNumber: number = 0;

  public drop(event: CdkDragDrop<any[]>) {
    event.previousContainer === event.container
      ? moveItemInArray(
          event.container.data,
          event.previousIndex,
          event.currentIndex
        )
      : copyArrayItem(
          event.previousContainer.data,
          event.container.data,
          event.previousIndex,
          event.currentIndex
        );
    const element: ElementStyle = event.container.data[event.currentIndex];
    this.addFormControl(this.customForm, element);
  }

  private addFormControl(form: FormGroup, element: ElementStyle): void {
    if (element.title !== 'button') {
      form.addControl(`${this.formControlNumber}`, new FormControl());
      this.formControlNumber++;
      if (element.required) {
        this.customForm.addValidators(Validators.required);
      }
    }
  }

  public onCustomFormSubmit() {
    console.log(this.customForm.value);
  }

  public saveDropField() {
    console.log('save');
  }

  public clearDropField() {
    for (let i = 0; i < this.formControlNumber; i++) {
      this.customForm.removeControl(`${i}`);
    }
    this.clearArray(this.elements);
  }

  private clearArray(array: any[]): void {
    array.length = 0;
  }
}
