import { Injectable } from '@angular/core';
import { map, catchError, mergeMap } from 'rxjs/operators';
import { of, switchMap } from 'rxjs';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  createBook,
  createBookFailure,
  createBookSuccess, deleteBook, deleteBookFailure, deleteBookSuccess,
  getBooks,
  getBooksFailure,
  getBooksSuccess, selectBook, selectBookFailure, selectBookSuccess,
} from '../actions/books.actions';
import { BooksService } from '../../../modules/books/shared/service/api/books.service';
import { BookModel } from '../../../shared/models/api/books.model';

@Injectable()
export class BooksEffects {
  constructor(
    private actions$: Actions,
    private booksService: BooksService
  ) {}

  loadBooks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getBooks),
      mergeMap(() =>
        this.booksService.getBooks().pipe(
          map((response: BookModel[]) => getBooksSuccess({ books: response })),
          catchError((error: string) => of(getBooksFailure({ message: error }))),
        ),
      ),
    ),
  );

  createBook$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createBook),
      mergeMap(({ book }) =>
        this.booksService.createBook(book).pipe(
          map((response: BookModel) => createBookSuccess( { book: response })),
          catchError((error: string) => of(createBookFailure({ message: error }))))
      )
    )
  );

  selectBook$ = createEffect(() =>
    this.actions$.pipe(
      ofType(selectBook),
      mergeMap(({ id }) =>
        this.booksService.getBook(id).pipe(
          map((response: BookModel) => selectBookSuccess( { book: response })),
          catchError((error: string) => of(selectBookFailure({ message: error }))))
      )
    )
  );

  deleteBook$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteBook),
      mergeMap(({ id }) =>
        this.booksService.deleteBook(id).pipe(
          map((response: boolean) => deleteBookSuccess( { id })),
          catchError((error: string) => of(deleteBookFailure({ message: error }))))
      )
    )
  );
}
