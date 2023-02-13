export interface UserLoginModel {
  password: string;
  email: string;
}

export interface UserModel {
  authToken: string;
  email: string;
  id: number;
  isAdmin: boolean;
  isEditor: boolean;
  languageStudy: string;
  name: string;
  refreshToken: string;
  surname: string;
  token: string;
  username: string;
}

export interface UserRefreshTokenModel {
  token: string;
  refreshToken: string;
}
