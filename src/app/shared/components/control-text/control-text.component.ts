import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-control-text',
  templateUrl: './control-text.component.html',
  styleUrls: ['./control-text.component.scss']
})
export class ControlTextComponent {
  @Input() control?: FormControl<string>
  @Input() label?: string
  @Input() type: 'text' | 'email' | 'number' | 'password' = 'text'
}
