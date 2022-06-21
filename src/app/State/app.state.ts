import { formField } from '../models/formfield.model';

export interface AppState {
  elements: formField[];
  currentElementId: string | null;
}

export const initialState: AppState = {
  elements: [],
  currentElementId: null,
};
