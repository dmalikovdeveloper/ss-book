import { Component, Input } from '@angular/core';
import { BookModel } from '../../../../../shared/models/api/books.model';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-book-view-ui',
  templateUrl: './book-view-ui.component.html',
  styleUrls: ['./book-view-ui.component.scss']
})
export class BookViewUiComponent {
  @Input() book: BookModel | null = null;

  pageSelect($event: PageEvent): void {

  }

  pageUpdate(): void {

  }

  pageAdd(): void {

  }
}
