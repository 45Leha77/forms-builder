import {
  CdkDragDrop,
  copyArrayItem,
  moveItemInArray,
  CdkDragExit,
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
  private formControlsNumber: number = 0;

  ngOnInit(): void {
    const elements = localStorage.getItem('Form');
    if (elements) {
      this.elements = JSON.parse(elements);
      this.restoreForm(this.elements);
    }
  }

  public drop(event: CdkDragDrop<ElementStyle[]>): void {
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
    }
    const element: ElementStyle = {
      ...event.container.data[event.currentIndex],
      id: this.setUniqueID(),
    };
    this.addFormControl(this.customForm, element);
  }

  public onCustomFormSubmit(): void {
    console.log(this.customForm.value);
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
    this.removeFromLocalStorage('Form');
  }

  private addFormControl(form: FormGroup, element: ElementStyle): void {
    if (element.title !== 'button') {
      form.addControl(`${this.formControlsNumber}`, new FormControl());
      this.formControlsNumber++;
      if (element.required) {
        this.customForm.addValidators(Validators.required);
      }
    }
  }

  private restoreForm(elements: ElementStyle[]): void {
    elements.forEach((element: ElementStyle) => {
      return this.addFormControl(this.customForm, element);
    });
  }

  private removeFromLocalStorage(item: string): void {
    localStorage.removeItem(item);
  }

  private clearArray(array: any[]): void {
    array.length = 0;
  }

  private setUniqueID(): string {
    return `${Math.floor(
      Math.random() * Math.floor(Math.random() * Date.now())
    )}`;
  }

  public exit(event: CdkDragExit<ElementStyle[]>) {
    console.log(event);
  }
}
