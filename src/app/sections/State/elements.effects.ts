import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs';
import { ElementStyle } from 'src/app/models/ElementStyle';
import { HttpService } from 'src/app/services/http.service';
import { loadElements, loadElementsSuccess } from './elements.actions';

@Injectable({ providedIn: 'root' })
export class ElementsEffects {
  constructor(private actions$: Actions, private httpService: HttpService) {}

  public loadElements$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadElements),
      mergeMap(() => {
        return this.httpService.getElements$().pipe(
          map((elements: ElementStyle[]) => {
            return loadElementsSuccess({ elements });
          })
        );
      })
    );
  });
}
