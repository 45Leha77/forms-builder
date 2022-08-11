import { createAction, props } from '@ngrx/store';
import { AuthResponse } from 'src/app/models/AuthResponse';

export const LOGIN_START = '[Auth] login start';
export const LOGIN_SUCCESS = '[Auth] login success';
export const LOGIN_AUTO = '[Auth] login auto';
export const LOGOUT = '[Auth] logout';

export const loginStart = createAction(
  LOGIN_START,
  props<{ user: { email: string; password: string } }>()
);

export const loginSuccess = createAction(
  LOGIN_SUCCESS,
  props<{ response: AuthResponse }>()
);

export const loginAuto = createAction(LOGIN_AUTO);

export const logout = createAction(LOGOUT);
