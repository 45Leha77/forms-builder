import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ButtonComponent } from './components/button/button.component';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { StylesPipe } from './pipes/styles.pipe';
import { ClickOutsideDirective } from './directives/click-outside.directive';

@NgModule({
  declarations: [ButtonComponent, StylesPipe, ClickOutsideDirective],
  imports: [CommonModule, FormsModule, DragDropModule, MatButtonModule],
  exports: [ButtonComponent, StylesPipe, ClickOutsideDirective],
})
export class SharedModule {}
