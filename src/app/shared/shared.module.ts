import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './components/input/input.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ButtonComponent } from './components/button/button.component';
import { TextareaComponent } from './components/textarea/textarea.component';
import { MatButtonModule } from '@angular/material/button';
import { CustomFormElementComponent } from './components/custom-form-element/custom-form-element.component';
import { DynamicFormControlComponent } from './components/dynamic-form-control/dynamic-form-control.component';
import { FormsModule } from '@angular/forms';
import { StylesPipe } from './pipes/styles.pipe';

@NgModule({
  declarations: [
    InputComponent,
    ButtonComponent,
    TextareaComponent,
    CustomFormElementComponent,
    DynamicFormControlComponent,
    StylesPipe,
  ],
  imports: [CommonModule, FormsModule, DragDropModule, MatButtonModule],
  exports: [
    ButtonComponent,
    CustomFormElementComponent,
    DynamicFormControlComponent,
  ],
})
export class SharedModule {}
