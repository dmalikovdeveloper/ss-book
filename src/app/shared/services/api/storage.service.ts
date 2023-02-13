import { Injectable } from '@angular/core';

@Injectable()
export class StorageService {
  constructor() {}

  static setKey(key: string, value: object | string | number) {
    const valueStringify = JSON.stringify(value);
    localStorage.setItem(key, valueStringify);
  }

  static getKey(key: string): any {
    const item: string | null = localStorage.getItem(key);
    if (item) {
      return JSON.parse(item);
    }
    return null;
  }

  static removeKey(key: string) {
    localStorage.removeItem(key);
  }

  static clearAll() {
    localStorage.clear();
  }
}
