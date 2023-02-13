import { FormControl } from '@angular/forms';

export interface LoginFormModel {
  password: FormControl<string>,
  email: FormControl<string>
}
