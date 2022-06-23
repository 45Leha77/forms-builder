import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { loginStart } from '../State/auth.actions';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  authForm!: FormGroup;
  hide = true;
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    return (this.authForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
    }));
  }

  onFormSubmit() {
    const user = {
      email: this.authForm.value.email,
      password: this.authForm.value.password,
    };
    this.store.dispatch(loginStart({ user }));
  }
}
