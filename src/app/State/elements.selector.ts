import { ElementsState } from './elements.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const ELEMENTS_STATE_NAME = 'elements';

const getElementsState =
  createFeatureSelector<ElementsState>(ELEMENTS_STATE_NAME);

export const getElements = createSelector(getElementsState, (state) => {
  return state.elementsStyle;
});

export const getElementStyleById = createSelector(
  getElementsState,
  (state: any, props: any) => {
    return state.elementsStyle.find((element: any) => {
      return element.id === props.id;
    });
  }
);
