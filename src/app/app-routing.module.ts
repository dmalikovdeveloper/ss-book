import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('./modules/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'books',
    loadChildren: () =>
      import('./modules/books/books.module').then((m) => m.BooksModule),
  },
  {
    path: 'news',
    loadChildren: () =>
      import('./modules/news/news.module').then((m) => m.NewsModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
