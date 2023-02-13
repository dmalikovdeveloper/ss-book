import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AppState } from '../../../../../reducers';
import { select, Store } from '@ngrx/store';
import { selectUser } from '../../../../../store/auth/reducers/auth.reducers';
import { Observable } from 'rxjs';
import { UserModel } from '@models/api';
import { logoutUser } from '../../../../../store/auth/actions/auth.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  selectUser$: Observable<UserModel | null>;

  constructor(
    private readonly store: Store<AppState>
  ) {
    this.selectUser$ = this.store.pipe(select(selectUser));
  }

  async logout() {
    this.store.dispatch(logoutUser({ user: null }));
  }
}
