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
  public isVisibleDefaultAnimation: boolean = false;
  private formControlsNumber: number = 0;

  ngOnInit(): void {
    const elements: string | null = localStorage.getItem('Form');
    if (elements) {
      this.elements = JSON.parse(elements);
      this.restoreForm(this.elements);
    }
    if (this.elements.length < 1) {
      this.toggleDefaultAnimation(true);
    }
  }

  public onDrop(event: CdkDragDrop<ElementStyle[]>): void {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      copyArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
      const currentElementIndex: number = event.currentIndex;
      const element: ElementStyle = event.container.data[currentElementIndex];
      this.elements[currentElementIndex] = {
        ...this.elements[currentElementIndex],
        id: this.setUniqueID(),
      };
      if (element.title !== 'button') {
        this.addFormControl(this.customForm, element);
        this.elements[currentElementIndex] = {
          ...this.elements[currentElementIndex],
          formControl: `${this.formControlsNumber}`,
        };
      }
    }
    console.log('drop', this.elements);
  }

  public onEnter(): void {
    this.toggleDefaultAnimation(false);
    console.log('enter', this.elements);
  }

  public onCustomFormSubmit(): void {
    if (this.customForm.valid) {
      console.log(this.customForm.value);
    }
  }

  public saveDropField(): void {
    if (this.elements.length < 1) {
      return;
    }
    localStorage.setItem('Form', JSON.stringify(this.elements));
  }

  public clearDropField(): void {
    for (let i = 0; i < this.formControlsNumber; i++) {
      this.customForm.removeControl(`${i}`);
    }
    this.clearArray(this.elements);
    localStorage.removeItem('Form');
    this.formControlsNumber = 0;
    this.toggleDefaultAnimation(true);
  }

  public removeElement({
    id,
    formControl,
  }: {
    id: string | undefined;
    formControl?: number;
  }): void {
    this.elements = this.elements.filter((element) => element.id !== id);
    this.customForm.removeControl(`${formControl}`);
    if (formControl) {
      this.formControlsNumber--;
    }
    if (this.elements.length < 1) {
      this.toggleDefaultAnimation(true);
    }
  }

  private addFormControl(form: FormGroup, element: ElementStyle): void {
    form.addControl(`${this.formControlsNumber}`, new FormControl());
    if (element.required) {
      form.controls[`${this.formControlsNumber}`].setValidators(
        Validators.required
      );
    }
    this.formControlsNumber++;
  }

  private restoreForm(elements: ElementStyle[]): void {
    elements.forEach((element: ElementStyle) => {
      if (element.title !== 'button') {
        return this.addFormControl(this.customForm, element);
      }
    });
  }

  private clearArray(array: any[]): void {
    array.length = 0;
  }

  private setUniqueID(): string {
    return `${Math.floor(
      Math.random() * Math.floor(Math.random() * Date.now())
    )}`;
  }

  private toggleDefaultAnimation(isVisible: boolean): void {
    this.isVisibleDefaultAnimation = isVisible;
  }
}
