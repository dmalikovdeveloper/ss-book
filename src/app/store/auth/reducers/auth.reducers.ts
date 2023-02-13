import { createReducer, on, createSelector } from '@ngrx/store';
import { AppState } from '../../../reducers';
import { UserLoginModel, UserModel } from '@models/api';
import {
  loginUser,
  loginUserFailure,
  loginUserSuccess,
  logoutUser,
  refreshToken,
  refreshTokenFailure,
  refreshTokenSuccess,
} from '../actions/auth.actions';
import { StorageService } from '@services/api';
import { deepObjClone } from '@constants';

export interface AuthState {
  userLogin: UserLoginModel | null;
  userLoginProcess: boolean;
  userLoginSuccess: boolean;
  user: UserModel | null;

  refreshTokenProcess: boolean;
  refreshTokenSuccess: any;
}

export const initialState: AuthState = {
  userLogin: null,
  userLoginProcess: false,
  userLoginSuccess: false,
  user: StorageService.getKey('user'),

  refreshTokenProcess: false,
  refreshTokenSuccess: null
};

export const AuthReducer = createReducer(
  initialState,
  // userLogin
  on(loginUser, (state, { userLogin }) => ({
    ...state,
    userLogin,
    userLoginProcess: true,
  })),
  on(logoutUser, (state) => {
    StorageService.removeKey('user');
    return {
      ...state,
      user: null,
    };
  }),
  on(loginUserSuccess, (state, { user }) => {
    StorageService.setKey('user', user);
    return {
      ...state,
      user,
      userLoginSuccess: true,
      userLoginProcess: false,
    };
  }),
  on(loginUserFailure, (state) => ({
    ...state,
    userLoginSuccess: false,
    userLoginProcess: false,
  })),
  // refreshToken
  on(refreshToken, (state) => ({
    ...state,
    refreshTokenProcess: true
  })),
  on(refreshTokenSuccess, (state, { userRefreshToken }) => {
    let user = state.user;
    let userRefreshed = null;
    if (user) {
      const userClone = deepObjClone(user);
      userRefreshed = { ...userClone, ...userRefreshToken };
    }
    StorageService.setKey('user', userRefreshed);
    return {
      ...state,
      user: userRefreshed,
      refreshTokenProcess: false,
      refreshTokenSuccess: userRefreshToken
    };
  }),
  on(refreshTokenFailure, (state) => {
    StorageService.removeKey('user');
    return {
      ...state,
      user: null,
      refreshTokenProcess: false,
      refreshTokenSuccess: null
    }
  }),
);

// SELECTORS
export const selectAuthState = (state: AppState) => state.authState;

// userLogin
export const selectUserLogin = createSelector(selectAuthState, (state) => state.userLogin);
export const selectUser = createSelector(selectAuthState, (state) => state.user);
export const selectUserLoginSuccess = createSelector(
  selectAuthState,
  (state) => state.userLoginSuccess,
);
export const selectUserLoginProcess = createSelector(
  selectAuthState,
  (state) => state.userLoginProcess,
);
// refreshToken
export const selectRefreshTokenSuccess = createSelector(selectAuthState, (state) => state.refreshTokenSuccess);
export const selectRefreshTokenProcess = createSelector(selectAuthState, (state) => state.refreshTokenProcess);
