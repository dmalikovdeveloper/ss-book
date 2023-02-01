import { PageModel, PagesModel } from '@models/utils';

export const PAGES: PagesModel = {
  books: {
    name: 'books',
    title: 'Books',
    url: 'books',
  },
  news: {
    name: 'news',
    title: 'news',
    url: 'news',
  },
  login: {
    name: 'login',
    title: 'login',
    url: 'login',
  },
};

export const ROUTES_LIST: PageModel[] = Object.keys(PAGES).map( (i: string) => {
  return PAGES[i]
})
