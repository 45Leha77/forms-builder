import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, of, tap } from 'rxjs';
import { AuthResponse } from 'src/app/models/AuthResponse';
import { AuthService } from 'src/app/services/auth.service';
import { loginAuto, loginStart, loginSuccess } from './auth.actions';

@Injectable({ providedIn: 'root' })
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router
  ) {}

  login$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loginStart),
      mergeMap((action) => {
        return this.authService
          .login(action.user.email, action.user.password)
          .pipe(
            map((response: AuthResponse) => {
              this.authService.setAuthDataToLocalStorage(response);
              return loginSuccess({ response });
            })
          );
      })
    );
  });

  autoLogin$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loginAuto),
      mergeMap((action) => {
        const user = this.authService.getUserFromLocalStorage();
        const token = this.authService.getTokenFromLocalStorage();
        const response: AuthResponse = {
          user,
          accessToken: token,
        };
        return of(loginSuccess({ response }));
      })
    );
  });

  loginRedirect$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(loginSuccess),
        tap(() => {
          this.router.navigate(['/forms-builder']);
        })
      );
    },
    { dispatch: false }
  );
}
