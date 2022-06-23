import { AuthReducer } from '../auth/State/auth.reducer';
import { ElementsReducer } from '../sections/State/elements.reducer';
import { ElementsState } from '../sections/State/elements.state';

export interface AppState {
  elements: ElementsState;
}

export const AppReducer = {
  elements: ElementsReducer,
  auth: AuthReducer,
};
