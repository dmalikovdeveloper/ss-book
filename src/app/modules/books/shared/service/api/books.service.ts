import { Injectable } from '@angular/core';
import { CoreApiService } from '@services/api';
import { Observable } from 'rxjs';
import { BookCreateModel, BookModel } from '../../../../../shared/models/api/books.model';

@Injectable({
  providedIn: 'root',
})
export class BooksService extends CoreApiService {
  booksUrl = 'book'

  constructor() {
    super()
  }

  getBooks(): Observable<BookModel[]> {
    return this.get(this.booksUrl).pipe();
  }

  getBook(id: number): Observable<BookModel> {
    return this.get(this.booksUrl, id).pipe();
  }

  createBook(book: BookCreateModel): Observable<BookModel> {
    return this.post<BookCreateModel, BookModel>(this.booksUrl, book).pipe();
  }

  deleteBook(id: number): Observable<boolean> {
    return this.delete(this.booksUrl, id).pipe();
  }
}
