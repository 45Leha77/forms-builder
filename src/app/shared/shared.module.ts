import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './components/input/input.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ButtonComponent } from './components/button/button.component';
import { TextareaComponent } from './components/textarea/textarea.component';
import { MatButtonModule } from '@angular/material/button';
import { CustomFormElementComponent } from './components/custom-form-element/custom-form-element.component';

@NgModule({
  declarations: [
    InputComponent,
    ButtonComponent,
    TextareaComponent,
    CustomFormElementComponent,
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    DragDropModule,
    MatButtonModule,
  ],
  exports: [ButtonComponent, CustomFormElementComponent],
})
export class SharedModule {}
