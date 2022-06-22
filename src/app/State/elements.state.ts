import { ElementStyle } from '../models/ElementStyle';

export interface ElementsState {
  elementsStyle: ElementStyle[];
  currentElementId: string | null;
}

export const initialState: ElementsState = {
  elementsStyle: [
    {
      id: '1',
      title: 'input',
      placeholderText: 'Put some text here',
      borderStyle: 'dotted',
      color: '#050505',
      fontSize: '16',
      fontWeight: '500',
      height: '100',
      width: '200',
      required: false,
    },
  ],
  currentElementId: null,
};
