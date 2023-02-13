import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { UserModel } from '@models/api';

@Component({
  selector: 'app-header-user-dropdown',
  templateUrl: './header-user-dropdown.component.html',
  styleUrls: ['./header-user-dropdown.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderUserDropdownComponent {
  @Input() user: UserModel | null = null;
  @Output() logoutEvent = new EventEmitter<void>();

  constructor() {}

  logout(): void {
    this.logoutEvent.emit();
  }
}
