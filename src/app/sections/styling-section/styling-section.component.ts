import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-styling-section',
  templateUrl: './styling-section.component.html',
  styleUrls: ['./styling-section.component.scss'],
})
export class StylingSectionComponent implements OnInit {
  styleForm!: FormGroup;
  constructor() {}

  ngOnInit(): void {
    this.styleForm = new FormGroup({
      placeholder: new FormControl(),
      width: new FormControl(),
      height: new FormControl(),
      required: new FormControl(false),
      borderStyle: new FormControl(),
      fontSize: new FormControl(),
      fontWeight: new FormControl(),
      color: new FormControl('#050505'),
    });
  }

  onFormSubmit() {
    console.log(this.styleForm.value);
  }
}
