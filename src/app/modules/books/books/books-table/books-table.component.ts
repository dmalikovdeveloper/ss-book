import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BookModel } from '../../../../shared/models/api/books.model';

@Component({
  selector: 'app-books-table',
  templateUrl: './books-table.component.html',
  styleUrls: ['./books-table.component.scss'],
})
export class BooksTableComponent {
  @Input() dataSource?: BookModel[] | null;
  @Output() deleteEvent = new EventEmitter<number>();

  columns = [
    {
      columnDef: 'id',
      header: 'id',
      cell: (element: BookModel) => `${element.id}`,
    },
    {
      columnDef: 'name',
      header: 'Name',
      cell: (element: BookModel) => `${element.name}`,
    },
    {
      columnDef: 'actions',
      header: 'Actions',
      cell: () => null,
    },
  ];
  displayedColumns = this.columns.map((c) => c.columnDef);

  constructor() {}

  delete(id: number): void {
    this.deleteEvent.emit(id);
  }
}
