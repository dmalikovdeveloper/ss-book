import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { mergeMap, Observable, skip, throwError } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { AppState } from '../../reducers';
import { UserModel } from '@models/api';
import { selectRefreshTokenSuccess, selectUser } from '../../store/auth/reducers/auth.reducers';
import { catchError } from 'rxjs/operators';
import { AuthService } from '../../modules/auth/shared/services/auth.service';
import { refreshToken } from '../../store/auth/actions/auth.actions';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  selectUser$: Observable<UserModel | null>;
  selectRefreshTokenSuccess$: Observable<any>;

  constructor(
    private readonly store: Store<AppState>,
    private readonly authService: AuthService
  ) {
    this.selectUser$ = this.store.pipe(select(selectUser));
    this.selectRefreshTokenSuccess$ = this.store.pipe(select(selectRefreshTokenSuccess));
  }

  private static unauthorized(error: any, req: HttpRequest<any>): boolean{
    return error instanceof HttpErrorResponse && !req.url.includes('auth/sign-in') && error.status === 401
  }

  private setRequest(req: HttpRequest<any>): HttpRequest<any> {
    const user = this.authService.getUser();
    return !!user
      ? req.clone({ setHeaders: { Authorization: 'Bearer ' + user.token } })
      : req;
  }

  private handle401Error(req: HttpRequest<any>, next: HttpHandler) {
    return this.selectRefreshTokenSuccess$.pipe(
      skip(1),
      mergeMap(() => {
        return next.handle(this.setRequest(req));
      })
    );
  }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    return next.handle(this.setRequest(req)).pipe(
      catchError(error => {
        if (TokenInterceptor.unauthorized(error, req)) {
          this.store.dispatch(refreshToken());
          return this.handle401Error(req, next);
        }
        return throwError(error);
      })
    )
  }
}
