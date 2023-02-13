import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { ControlTextComponent } from './control-text.component';

@NgModule({
  declarations: [ControlTextComponent],
  imports: [CommonModule, MatFormFieldModule, ReactiveFormsModule, MatInputModule],
  exports: [
    ControlTextComponent,
  ],
})
export class ControlTextModule {}
