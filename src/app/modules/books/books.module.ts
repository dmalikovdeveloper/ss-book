import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { BooksComponent } from './books/books.component';
import { SpinnerModule } from '@components/spinner/spinner.module';
import { BooksTableComponent } from './books/books-table/books-table.component';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    BooksComponent,
    BooksTableComponent
  ],
  imports: [
    CommonModule,
    BooksRoutingModule,
    MatButtonModule,
    SpinnerModule,
    MatTableModule,
  ],
})
export class BooksModule { }
