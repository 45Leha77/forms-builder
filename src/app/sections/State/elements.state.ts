import { ElementStyle } from '../../models/ElementStyle';

export interface ElementsState {
  elementsStyle: ElementStyle[];
  currentElementId: string | null
}

export const initialState: ElementsState = {
  elementsStyle: [],
  currentElementId: null,
};
