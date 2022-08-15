import { ElementStyle } from '../../models/ElementStyle';

export interface ElementsState {
  elementsStyle: ElementStyle[];
  currentElement: string | null
}

export const initialState: ElementsState = {
  elementsStyle: [],
  currentElement: null,
};
