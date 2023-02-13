import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookCreateRoutingModule } from './book-create-routing.module';
import { BookCreateComponent } from './book-create/book-create.component';
import { MatButtonModule } from '@angular/material/button';
import { ControlTextModule } from '@components/control-text/control-text.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  declarations: [
    BookCreateComponent
  ],
  imports: [
    CommonModule,
    BookCreateRoutingModule,
    MatButtonModule,
    ControlTextModule,
    ReactiveFormsModule,
    MatCardModule,
    MatDividerModule,
  ],
})
export class BookCreateModule { }
