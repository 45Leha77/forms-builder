import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { ElementStyle } from 'src/app/models/ElementStyle';
import { ElementsService } from 'src/app/services/elements.service';
import { editElement } from 'src/app/sections/State/elements.actions';
import { getElementStyleById } from '../State/elements.selector';

@Component({
  selector: 'app-styling-section',
  templateUrl: './styling-section.component.html',
  styleUrls: ['./styling-section.component.scss'],
})
export class StylingSectionComponent implements OnInit, OnDestroy {
  styleForm!: FormGroup;
  elementStyle!: ElementStyle;

  constructor(private store: Store, public elementsService: ElementsService) {}

  ngOnInit(): void {
    this.createForm();
    this.subscribeToElementStyle();
  }

  subscribeToElementStyle() {
    return this.store.select(getElementStyleById).subscribe((data) => {
      if (data) {
        this.elementStyle = data;
        this.updateForm(data);
      }
    });
  }

  createForm() {
    return (this.styleForm = new FormGroup({
      placeholderText: new FormControl(),
      width: new FormControl(),
      height: new FormControl(),
      required: new FormControl(),
      borderStyle: new FormControl(),
      fontSize: new FormControl(),
      fontWeight: new FormControl(),
      color: new FormControl(),
    }));
  }

  updateForm(data: ElementStyle) {
    return this.styleForm.patchValue({
      placeholderText: data.placeholderText,
      width: data.width,
      height: data.height,
      required: data.required,
      borderStyle: data.borderStyle,
      fontSize: data.fontSize,
      fontWeight: data.fontWeight,
      color: data.color,
    });
  }

  onFormSubmit() {
    const elementStyle = {
      ...this.elementStyle,
      ...this.styleForm.value,
    };
    this.store.dispatch(editElement({ elementStyle }));
  }

  ngOnDestroy(): void {
    this.subscribeToElementStyle().unsubscribe();
  }
}
