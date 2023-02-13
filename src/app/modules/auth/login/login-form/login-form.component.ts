import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginFormModel } from '@models/utils';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { UntilDestroy } from '@ngneat/until-destroy';
import { AppState } from '../../../../reducers';
import { loginUser } from '../../../../store/auth/actions/auth.actions';
import { selectUserLoginProcess } from '../../../../store/auth/reducers/auth.reducers';

@UntilDestroy()
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginFormComponent implements OnInit {
  form = new FormGroup<LoginFormModel>({
    password: new FormControl('', {
      validators: [Validators.required],
      nonNullable: true,
    }),
    email: new FormControl('', {
      validators: [Validators.required, Validators.email],
      nonNullable: true,
    }),
  });

  selectUserLoginProcess$: Observable<boolean>;

  constructor(private readonly store: Store<AppState>) {
    this.selectUserLoginProcess$ = this.store.pipe(select(selectUserLoginProcess));
  }

  ngOnInit(): void {}

  submit(): void {
    if (this.form.valid) {
      const { email, password } = this.form.value;
      if (email && password) {
        this.store.dispatch(loginUser({ userLogin: { email, password } }));
      }
    }
  }
}

// vpmoxqibglszljjfcq@tmmcv.com
// 123456qwerty@
