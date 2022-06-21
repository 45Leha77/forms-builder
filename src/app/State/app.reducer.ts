import { Action, createReducer, on } from '@ngrx/store';
import { AppState, initialState } from './app.state';

const _appReducer = createReducer(initialState);

export function appReducer(state: AppState | undefined, action: Action) {
  return _appReducer(state, action);
}
