import { FormControl } from '@angular/forms';

export interface BookCreateModel {
  name: string;
  height: string;
  width: string;
  text?: string;
}

export interface BookModel extends BookCreateModel {
  id: number;
  createdDate: string;
  createdBy: string;
  updatedDate: string;
  updatedBy: string;
  deleted: number;
}

export interface BooksCreateFormModel {
  name: FormControl<string>;
  width: FormControl<string>;
  height: FormControl<string>;
}
