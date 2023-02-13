import { Injectable } from '@angular/core';
import { map, catchError } from 'rxjs/operators';
import { of, switchMap } from 'rxjs';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { UserModel, UserRefreshTokenModel } from '@models/api';
import {
  loginUser,
  loginUserFailure,
  loginUserSuccess,
  refreshToken, refreshTokenFailure,
  refreshTokenSuccess,
} from '../actions/auth.actions';
import { AuthService } from '../../../modules/auth/shared/services/auth.service';

@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private authService: AuthService
  ) {}

  loadLoginUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loginUser),
      switchMap(({ userLogin }) =>
        this.authService.login(userLogin).pipe(
          map((response: UserModel) => loginUserSuccess({ user: response })),
          catchError((error: string) => of(loginUserFailure({ message: error }))),
        ),
      ),
    ),
  );

  refreshTokenUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(refreshToken),
      switchMap(() =>
        this.authService.refreshToken().pipe(
          map((response: UserRefreshTokenModel) => refreshTokenSuccess({ userRefreshToken: response })),
          catchError((error: string) => of(refreshTokenFailure({ message: error }))),
        ),
      ),
    ),
  );
}
