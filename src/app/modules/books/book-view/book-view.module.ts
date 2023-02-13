import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookViewRoutingModule } from './book-view-routing.module';
import { BookViewComponent } from './book-view/book-view.component';
import { BookViewUiComponent } from './book-view/book-view-ui/book-view-ui.component';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import { SpinnerModule } from '@components/spinner/spinner.module';


@NgModule({
  declarations: [
    BookViewComponent,
    BookViewUiComponent
  ],
  imports: [
    CommonModule,
    BookViewRoutingModule,
    MatButtonModule,
    MatPaginatorModule,
    SpinnerModule,
  ],
})
export class BookViewModule { }
