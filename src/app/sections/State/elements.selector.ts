import { ElementsState } from './elements.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ElementStyle } from '../../models/ElementStyle';

export const ELEMENTS_STATE_NAME = 'elements';

const getElementsState =
  createFeatureSelector<ElementsState>(ELEMENTS_STATE_NAME);

export const getElements = createSelector(getElementsState, (state) => {
  return state.elementsStyle;
});

export const getCurrentElementId = createSelector(getElementsState, (state) => {
  return state.currentElementId;
});

export const getElementStyleById = createSelector(
  getCurrentElementId,
  getElements,
  (id: string | null, elements: ElementStyle[]) => {
    return elements.find((element: ElementStyle) => {
      return element.id === id;
    });
  }
);
