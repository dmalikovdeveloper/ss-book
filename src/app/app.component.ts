import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { UserModel } from '@models/api';
import { select, Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { NavigateService } from '@services/api';
import { AppState } from './reducers';
import { selectUser } from './store/auth/reducers/auth.reducers';

@UntilDestroy()
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  selectUser$: Observable<UserModel | null>;

  constructor(
    private readonly store: Store<AppState>,
    private readonly router: Router,
    private navigateService: NavigateService,
  ) {
    this.selectUser$ = this.store.pipe(select(selectUser));
  }

  ngOnInit(): void {
    this.selectUser$.pipe(untilDestroyed(this)).subscribe(async (res: UserModel | null) => {
      if(res) {
        await this.navigateService.goToBooks();
      } else {
        await this.navigateService.goToLogin();
      }
    });
  }
}
