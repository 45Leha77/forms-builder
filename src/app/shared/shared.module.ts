import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './components/input/input.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [InputComponent],
  imports: [CommonModule, MatFormFieldModule, MatInputModule, DragDropModule],
  exports: [InputComponent],
})
export class SharedModule {}
