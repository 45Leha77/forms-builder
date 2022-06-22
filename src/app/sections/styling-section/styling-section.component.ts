import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { ElementStyle } from 'src/app/models/ElementStyle';
import { ElementsService } from 'src/app/services/elements.service';
import { editElement } from 'src/app/State/elements.actions';
import { getElementStyleById } from '../../State/elements.selector';
import { tap } from 'rxjs';

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
    this.subscribeToElementStyle();
  }

  subscribeToElementStyle() {
    return this.store
      .select(getElementStyleById, { id: '1' })
      .pipe(
        tap((data) => {
          this.createForm(data);
        })
      )
      .subscribe((data) => {
        if (data) {
          this.elementStyle = data;
        }
      });
  }

  createForm(style: ElementStyle) {
    return (this.styleForm = new FormGroup({
      placeholderText: new FormControl(style.placeholderText),
      width: new FormControl(style.width),
      height: new FormControl(style.height),
      required: new FormControl(style.required),
      borderStyle: new FormControl(style.borderStyle),
      fontSize: new FormControl(style.fontSize),
      fontWeight: new FormControl(style.fontWeight),
      color: new FormControl(style.color),
    }));
  }

  onFormSubmit() {
    console.log(this.styleForm.value);
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
