import { PageModel, PagesModel } from '@models/utils';

export const PAGES: PagesModel = {
  books: {
    name: 'books',
    title: 'Books',
    url: 'books',
    private: true
  },
  news: {
    name: 'news',
    title: 'news',
    url: 'news',
    private: true
  },
  login: {
    name: 'Sign in',
    title: 'login',
    url: 'auth/sign-in',
    private: false
  },
};

export const ROUTES_LIST: PageModel[] = Object.keys(PAGES).map( (i: string) => PAGES[i]);
