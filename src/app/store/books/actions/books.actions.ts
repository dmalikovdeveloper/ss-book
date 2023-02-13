import { createAction, props } from '@ngrx/store';
import { BookCreateModel, BookModel } from '../../../shared/models/api/books.model';

export enum BooksActionTypes {
  GetBooks = '[Book] Get Books',
  GetBooksSuccess = '[Book] Get Books Success',
  GetBooksFailure = '[Book] Get Books Failure',

  CreateBook = '[Book] Create Book',
  CreateBookSuccess = '[Book] Create Book Success',
  CreateBookFailure = '[Book] Create Book Failure',

  SelectBook = '[Book] Select Book',
  SelectBookSuccess = '[Book] Select Book Success',
  SelectBookFailure = '[Book] Select Book Failure',

  DeleteBook = '[Book] Delete Book',
  DeleteBookSuccess = '[Book] Delete Book Success',
  DeleteBookFailure = '[Book] Delete Book Failure',

  EditBook = '[Book] Edit Book',
  EditBookSuccess = '[Book] Edit Book Success',
  EditBookFailure = '[Book] Edit Book Failure',
}

// getBooks
export const getBooks = createAction(BooksActionTypes.GetBooks);
export const getBooksSuccess = createAction(
  BooksActionTypes.GetBooksSuccess,
  props<{ books: BookModel[] }>(),
);
export const getBooksFailure = createAction(
  BooksActionTypes.GetBooksFailure,
  props<{ message: string }>(),
);

// createBook
export const createBook = createAction(
  BooksActionTypes.CreateBook,
  props<{ book: BookCreateModel }>(),
);
export const createBookSuccess = createAction(
  BooksActionTypes.CreateBookSuccess,
  props<{ book: BookModel }>(),
);
export const createBookFailure = createAction(
  BooksActionTypes.CreateBookFailure,
  props<{ message: string }>(),
);

// selectBook
export const selectBook = createAction(BooksActionTypes.SelectBook, props<{ id: number }>());
export const selectBookSuccess = createAction(
  BooksActionTypes.SelectBookSuccess,
  props<{ book: BookModel }>(),
);
export const selectBookFailure = createAction(
  BooksActionTypes.SelectBookFailure,
  props<{ message: string }>(),
);

// deleteBook
export const deleteBook = createAction(BooksActionTypes.DeleteBook, props<{ id: number }>());
export const deleteBookSuccess = createAction(
  BooksActionTypes.DeleteBookSuccess,
  props<{ id: number }>(),
);
export const deleteBookFailure = createAction(
  BooksActionTypes.DeleteBookFailure,
  props<{ message: string }>(),
);

// editBook
export const editBook = createAction(BooksActionTypes.EditBook, props<{ book: BookModel }>());
export const editBookSuccess = createAction(BooksActionTypes.EditBookSuccess, props<any>());
export const editBookFailure = createAction(
  BooksActionTypes.EditBookFailure,
  props<{ message: string }>(),
);
