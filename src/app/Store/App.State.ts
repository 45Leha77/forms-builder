import { ElementsReducer } from '../State/elements.reducer';
import { ElementsState } from '../State/elements.state';

export interface AppState {
  elements: ElementsState;
}

export const AppReducer = {
  elements: ElementsReducer,
};
