import { createAction, props } from '@ngrx/store';
import { AuthResponse } from 'src/app/models/AuthResponse';
import { User } from '../../models/User';

export const LOGIN_START = '[Auth] login start';
export const LOGIN_SUCCESS = '[Auth] login success';

export const loginStart = createAction(
  LOGIN_START,
  props<{ user: { email: string; password: string } }>()
);

export const loginSuccess = createAction(
  LOGIN_SUCCESS,
  props<{ response: AuthResponse }>()
);
