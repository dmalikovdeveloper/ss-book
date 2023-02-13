import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BookModel } from '../../../../shared/models/api/books.model';
import { select, Store } from '@ngrx/store';
import { AppState } from '../../../../reducers';
import { selectBook } from '../../../../store/books/actions/books.actions';
import {
  selectSelectedBook,
  selectSelectedBookProcess,
} from '../../../../store/books/reducers/books.reducers';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-view',
  templateUrl: './book-view.component.html',
  styleUrls: ['./book-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookViewComponent implements OnInit {
  selectSelectedBookProcess$: Observable<boolean>;
  selectSelectedBook$: Observable<BookModel | null>;

  constructor(private readonly store: Store<AppState>, private readonly route: ActivatedRoute) {
    const id = this.route.snapshot.paramMap.get('id');
    this.store.dispatch(selectBook({ id: Number(id) }));
    this.selectSelectedBook$ = this.store.pipe(select(selectSelectedBook));
    this.selectSelectedBookProcess$ = this.store.pipe(select(selectSelectedBookProcess));
  }

  ngOnInit(): void {}
}
