import {
  CdkDragDrop,
  copyArrayItem,
  moveItemInArray,
} from '@angular/cdk/drag-drop';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ElementStyle } from 'src/app/models/ElementStyle';

@Component({
  selector: 'app-drop-section',
  templateUrl: './drop-section.component.html',
  styleUrls: ['./drop-section.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DropSectionComponent implements OnInit {
  public elements: ElementStyle[] = [];
  public customForm: FormGroup = new FormGroup({});

  private formControlNumber: number = 0;

  ngOnInit(): void {
    const elements = localStorage.getItem('Form');
    if (elements) {
      this.elements = JSON.parse(elements);
      this.elements.forEach((element: ElementStyle) => {
        return this.addFormControl(this.customForm, element);
      });
    }
  }

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

  public saveDropField(): void {
    if (this.elements.length < 1) {
      return;
    }
    localStorage.setItem('Form', JSON.stringify(this.elements));
  }

  public clearDropField() {
    for (let i = 0; i < this.formControlNumber; i++) {
      this.customForm.removeControl(`${i}`);
    }
    this.clearArray(this.elements);
    this.removeFromLocalStorage('Form');
  }

  private removeFromLocalStorage(item: string) {
    localStorage.removeItem(item);
  }
  
  private clearArray(array: any[]): void {
    array.length = 0;
  }
}
