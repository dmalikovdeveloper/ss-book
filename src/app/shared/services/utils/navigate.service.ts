import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class NavigateService {

  constructor(
    private readonly router: Router
  ) {}

  async goToBooks(): Promise<void> {
    await this.router.navigate([`books`]);
  }

  async goToLogin(): Promise<void> {
    await this.router.navigate([`auth/sign-in`]);
  }
}
