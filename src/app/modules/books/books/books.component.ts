import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { deleteBook, getBooks } from '../../../store/books/actions/books.actions';
import { BookModel } from '../../../shared/models/api/books.model';
import { Observable } from 'rxjs';
import { selectBooks, selectBooksProcess } from '../../../store/books/reducers/books.reducers';
import { AppState } from '../../../reducers';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BooksComponent implements OnInit {
  selectBooks$: Observable<BookModel[]>;
  selectBooksProcess$: Observable<boolean>;

  constructor(private readonly store: Store<AppState>) {
    this.store.dispatch(getBooks());
    this.selectBooks$ = this.store.pipe(select(selectBooks));
    this.selectBooksProcess$ = this.store.pipe(select(selectBooksProcess));
  }

  ngOnInit(): void {}

  deleteBook(id: number): void {
    this.store.dispatch(deleteBook({ id }));
  }
}
