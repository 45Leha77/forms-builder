import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from '../shared/shared.module';
import { ElementsEffects } from './State/elements.effects';
import { ElementsReducer } from './State/elements.reducer';
import { ELEMENTS_STATE_NAME } from './State/elements.selector';
import { DragSectionComponent } from './drag-section/drag-section.component';
import { DropSectionComponent } from './drop-section/drop-section.component';
import { SectionsRoutingModule } from './sections-routing.module';
import { SectionsComponent } from './sections.component';
import { StylingSectionComponent } from './styling-section/styling-section.component';
import { LetModule } from '@ngrx/component';
import { StylingFormComponent } from './styling-section/styling-form/styling-form.component';

@NgModule({
  imports: [
    CommonModule,
    DragDropModule,
    SharedModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    SectionsRoutingModule,
    StoreModule.forFeature(ELEMENTS_STATE_NAME, ElementsReducer),
    EffectsModule.forFeature([ElementsEffects]),
    LetModule,
  ],
  declarations: [
    DragSectionComponent,
    DropSectionComponent,
    StylingSectionComponent,
    SectionsComponent,
    StylingFormComponent
  ],
  providers: [],
})
export class SectionsModule {}
