import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { isNumber } from '@constants';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import {
  BookCreateModel,
  BookModel,
  BooksCreateFormModel,
} from '../../../../shared/models/api/books.model';
import {
  selectBooksProcess,
  selectCreateBook,
  selectSelectedBook,
} from '../../../../store/books/reducers/books.reducers';
import { createBook } from '../../../../store/books/actions/books.actions';
import { AppState } from '../../../../reducers';

@UntilDestroy()
@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookCreateComponent implements OnInit {
  form = new FormGroup<BooksCreateFormModel>({
    name: new FormControl('', {
      validators: [Validators.required],
      nonNullable: true,
    }),
    width: new FormControl('', {
      validators: [Validators.required, Validators.min(100)],
      nonNullable: true,
    }),
    height: new FormControl('', {
      validators: [Validators.required, Validators.min(100)],
      nonNullable: true,
    }),
  });
  selectCreateBook$: Observable<BookCreateModel | {}>;
  selectBooksProcess$: Observable<boolean>;
  private selectSelectedBook$: Observable<BookModel | null>;

  constructor(private router: Router, private store: Store<AppState>) {
    this.selectCreateBook$ = this.store.pipe(select(selectCreateBook));
    this.selectBooksProcess$ = this.store.pipe(select(selectBooksProcess));
    this.selectSelectedBook$ = this.store.pipe(select(selectSelectedBook));
  }

  ngOnInit(): void {
    this.selectSelectedBook$.pipe(untilDestroyed(this)).subscribe((res) => {
      if (res && isNumber(res.id)) {
        this.viewCreatedPage(res.id);
      }
    });
  }

  bookCreate(): void {
    if (this.form.valid) {
      this.store.dispatch(createBook({ book: <BookCreateModel>this.form.value }));
    }
  }

  private async viewCreatedPage(id: number): Promise<void> {
    await this.router.navigate([`books/${id}`]);
  }
}
