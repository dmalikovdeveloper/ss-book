import { createAction, props } from '@ngrx/store';
import { UserLoginModel, UserModel, UserRefreshTokenModel } from '@models/api';

export enum AuthActionTypes {
  LoginUser = '[Auth User] Login User',
  LogoutUser = '[Auth User] Logout User',
  LoginUserSuccess = '[Auth User] Login User Success',
  LoginUserFailure = '[Auth User] Login User Failure',

  RefreshTokenUser = '[Auth User] Refresh Token User',
  RefreshTokenSuccess = '[Auth User] Refresh Token Success',
  RefreshTokenFailure = '[Auth User] Refresh Token Failure'
}

// LoginUser
export const loginUser = createAction(
  AuthActionTypes.LoginUser,
  props<{ userLogin: UserLoginModel }>(),
);
export const logoutUser = createAction(
  AuthActionTypes.LogoutUser,
  props<{ user: null }>(),
);
export const loginUserSuccess = createAction(
  AuthActionTypes.LoginUserSuccess,
  props<{ user: UserModel }>(),
);
export const loginUserFailure = createAction(
  AuthActionTypes.LoginUserFailure,
  props<{ message: string }>(),
);

// RefreshToken
export const refreshToken = createAction(AuthActionTypes.RefreshTokenUser);
export const refreshTokenSuccess = createAction(
  AuthActionTypes.RefreshTokenSuccess,
  props<{ userRefreshToken: UserRefreshTokenModel }>(),
);
export const refreshTokenFailure = createAction(
  AuthActionTypes.RefreshTokenFailure,
  props<{ message: string }>(),
);
