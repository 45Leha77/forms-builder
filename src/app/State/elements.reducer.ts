import { Action, createReducer, on } from '@ngrx/store';
import { editElement, loadElementsSuccess } from './elements.actions';
import { ElementsState, initialState } from './elements.state';

const _elementsReducer = createReducer(
  initialState,
  on(editElement, (state, action) => {
    const updatedElements = state.elementsStyle.map((elementStyle) => {
      return action.elementStyle.id === elementStyle.id
        ? action.elementStyle
        : elementStyle;
    });
    return {
      ...state,
      elementsStyle: updatedElements,
    };
  }),
  on(loadElementsSuccess, (state, action) => {
    return {
      ...state,
      elementsStyle: action.elements,
    };
  })
);

export function ElementsReducer(
  state: ElementsState | undefined,
  action: Action
) {
  return _elementsReducer(state, action);
}
