import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ButtonComponent } from './components/button/button.component';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { StylesPipe } from './pipes/styles.pipe';
import { ClickOutsideDirective } from './directives/click-outside.directive';
import { InputComponent } from './components/input/input.component';
import { TextareaComponent } from './components/textarea/textarea.component';
import { RadioComponent } from './components/radio/radio.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { DeleteButtonComponent } from './components/delete-button/delete-button.component';

@NgModule({
  declarations: [
    ButtonComponent,
    StylesPipe,
    ClickOutsideDirective,
    InputComponent,
    TextareaComponent,
    RadioComponent,
    CheckboxComponent,
    DeleteButtonComponent,
  ],
  imports: [CommonModule, FormsModule, DragDropModule, MatButtonModule],
  exports: [
    ButtonComponent,
    StylesPipe,
    ClickOutsideDirective,
    InputComponent,
    TextareaComponent,
    RadioComponent,
    CheckboxComponent,
    DeleteButtonComponent,
  ],
})
export class SharedModule {}
