import { createReducer, on, createSelector } from '@ngrx/store';
import {
  createBook,
  createBookFailure,
  createBookSuccess, deleteBook,
  getBooks,
  getBooksFailure,
  getBooksSuccess,
  selectBook,
  selectBookFailure,
  selectBookSuccess,
} from '../actions/books.actions';
import { BookCreateModel, BookModel } from '../../../shared/models/api/books.model';
import { deepObjClone } from '@constants';
import { AppState } from '../../../reducers';

export interface BooksState {
  books: BookModel[];
  booksSuccess: boolean;
  booksProcess: boolean;

  createBook: BookCreateModel | {};
  createBookSuccess: boolean;
  createBookProcess: boolean;

  selectedBook: BookModel | null;
  selectedBookSuccess: boolean;
  selectedBookProcess: boolean;

  deleteBookId: number | null;
  deleteBookSuccess: boolean;
  deletedBookProcess: boolean;
}

export const initialState: BooksState = {
  books: [],
  booksSuccess: false,
  booksProcess: false,
  createBook: {},
  createBookSuccess: false,
  createBookProcess: false,
  selectedBook: null,
  selectedBookSuccess: false,
  selectedBookProcess: false,
  deleteBookId: null,
  deleteBookSuccess: false,
  deletedBookProcess: false
};

export const TodoReducer = createReducer(
  initialState,
  // get books
  on(getBooks, (state) => ({
    ...state,
    booksProcess: true,
  })),
  on(getBooksSuccess, (state, { books }) => ({
    ...state,
    books: books,
    booksSuccess: true,
    booksProcess: false,
  })),
  on(getBooksFailure, (state) => ({
    ...state,
    booksSuccess: false,
    booksProcess: false,
  })),
  /// create book
  on(createBook, (state, { book }) => ({
    ...state,
    createBookProcess: true,
    createBook: book,
  })),
  on(createBookSuccess, (state: BooksState, { book }) => {
    const books = state?.books ? deepObjClone(state.books) : [];
    books.push(book);
    const newState = {
      ...state,
      books,
      selectedBook: book,
      createBookProcess: false,
      createBookSuccess: true,
    };
    return newState;
  }),
  on(createBookFailure, (state) => ({
    ...state,
    createBookProcess: false,
    createBookSuccess: false,
  })),
  // select book
  on(selectBook, (state) => ({
    ...state,
    selectedBookProcess: true,
  })),
  on(selectBookSuccess, (state, { book }) => ({
    ...state,
    selectedBook: book,
    selectedBookSuccess: true,
    selectedBookProcess: false,
  })),
  on(selectBookFailure, (state) => ({
    ...state,
    selectedBookSuccess: false,
    selectedBookProcess: false,
  })),
  // delete book
  on(deleteBook, (state, { id }) => ({
    ...state,
    deleteBookId: id,
    deletedBookProcess: true
  })),
  on(createBookSuccess, (state: BooksState, { book }) => {
    let books = state?.books ? deepObjClone(state.books) : [];
    books = books.filter( (i: BookModel) => i.id !== book.id);
    const newState = {
      ...state,
      books,
      deleteBookSuccess: true,
      deletedBookProcess: false,
    };
    return newState;
  }),
  on(createBookFailure, (state) => ({
    ...state,
    deleteBookSuccess: false,
    deletedBookProcess: false
  })),
);

// SELECTORS
export const selectBooksState = (state: AppState) => state.booksState;

// get books
export const selectBooks = createSelector(selectBooksState, (state) => state.books);
export const selectBooksSuccess = createSelector(selectBooksState, (state) => state.booksSuccess);
export const selectBooksProcess = createSelector(selectBooksState, (state) => state.booksProcess);

/// create book
export const selectCreateBook = createSelector(selectBooksState, (state) => state.createBook);
export const selectCreateBookSuccess = createSelector(
  selectBooksState,
  (state) => state.createBookSuccess,
);
export const selectCreateBookProcess = createSelector(
  selectBooksState,
  (state) => state.createBookProcess,
);

// select book
export const selectSelectedBook = createSelector(selectBooksState, (state) => state.selectedBook);
export const selectSelectedBookSuccess = createSelector(selectBooksState, (state) => state.selectedBookSuccess);
export const selectSelectedBookProcess = createSelector(selectBooksState, (state) => state.selectedBookProcess);
