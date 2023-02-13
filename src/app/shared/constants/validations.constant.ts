import { Validators } from '@angular/forms';

export const validatorsNumber = () => Validators.pattern(/-?\d*\.?\d{1,2}/);
