import { Validators } from '@angular/forms';

export const validatorsNumber = () => {
  return Validators.pattern(/-?\d*\.?\d{1,2}/);
};
