import { Injectable } from '@angular/core';
import { CoreApiService, StorageService } from '@services/api';
import { Observable } from 'rxjs';
import { UserLoginModel, UserModel, UserRefreshTokenModel } from '@models/api';

@Injectable({
  providedIn: 'root',
})
export class AuthService extends CoreApiService {
  loginUrl = 'auth/sign-in';
  refreshTokenUrl = 'auth/refreshtoken';

  constructor() {
    super();
  }

  login(user: UserLoginModel): Observable<UserModel> {
    return this.post<UserLoginModel, UserModel>(this.loginUrl,  user);
  }

  refreshToken(): Observable<UserRefreshTokenModel> {
    return this.post(this.refreshTokenUrl, { refreshToken: this.getUser()?.refreshToken });
  }

  getUser(): UserModel | null {
    return StorageService.getKey('user');
  }
}
