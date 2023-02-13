import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './books/books.component';

const routes: Routes = [
  { path: '', component: BooksComponent },
  {
    path: 'create',
    loadChildren: () => import('./book-create/book-create.module').then((m) => m.BookCreateModule),
  },
  {
    path: ':id',
    loadChildren: () => import('./book-view/book-view.module').then((m) => m.BookViewModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BooksRoutingModule {}
