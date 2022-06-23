import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs';
import { AuthResponse } from 'src/app/models/AuthResponse';
import { AuthService } from 'src/app/services/Auth.service';
import { loginStart, loginSuccess } from './auth.actions';

@Injectable({ providedIn: 'root' })
export class AuthEffects {
  constructor(private actions$: Actions, private authService: AuthService) {}

  login$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loginStart),
      mergeMap((action) => {
        return this.authService
          .login(action.user.email, action.user.password)
          .pipe(
            map((response: AuthResponse) => {
              return loginSuccess({ response });
            })
          );
      })
    );
  });
}
