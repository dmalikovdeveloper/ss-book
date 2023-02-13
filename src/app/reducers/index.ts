import { isDevMode } from '@angular/core';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
} from '@ngrx/store';
import { TodoReducer, BooksState } from '../store/books/reducers/books.reducers';
import { AuthReducer, AuthState } from '../store/auth/reducers/auth.reducers';

// console.log all actions
export function debug(reducer: ActionReducer<any>): ActionReducer<any> {
  return function (state, action) {
    console.log('state', state);
    console.log('action', action);

    return reducer(state, action);
  };
}

export interface AppState {
  booksState: BooksState
  authState: AuthState
}

export const reducers: ActionReducerMap<AppState> = {
  booksState: TodoReducer,
  authState: AuthReducer,
};

export const metaReducers: MetaReducer<AppState>[] = isDevMode() ? [debug] : [];
