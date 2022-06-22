import { createAction, props } from '@ngrx/store';
import { ElementStyle } from '../models/ElementStyle';

export const LOAD_ELEMENTS = '[Elements] load elements';

export const LOAD_ELEMENTS_SUCCESS = '[Elements] load elements success';

export const EDIT_ELEMENT = '[Elements] edit element style';

export const loadElements = createAction(LOAD_ELEMENTS);
export const loadElementsSuccess = createAction(
  LOAD_ELEMENTS_SUCCESS,
  props<{ elements: ElementStyle[] }>()
);

export const editElement = createAction(
  EDIT_ELEMENT,
  props<{ elementStyle: ElementStyle }>()
);
