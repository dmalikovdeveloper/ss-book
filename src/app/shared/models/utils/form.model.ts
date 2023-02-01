import { FormControl } from '@angular/forms';

export interface LoginForm {
  password: FormControl<string>,
  passwordConfirm: FormControl<string>,
  email: FormControl<string>
}
