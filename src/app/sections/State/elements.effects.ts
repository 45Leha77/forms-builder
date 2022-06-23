import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs';
import { HttpService } from 'src/app/services/Http.service';
import { loadElements, loadElementsSuccess } from './elements.actions';

@Injectable({ providedIn: 'root' })
export class ElementsEffects {
  constructor(private actions$: Actions, private httpService: HttpService) {}

  loadElements$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadElements),
      mergeMap(() => {
        return this.httpService.getElements().pipe(
          map((elements) => {
            return loadElementsSuccess({ elements });
          })
        );
      })
    );
  });
}
