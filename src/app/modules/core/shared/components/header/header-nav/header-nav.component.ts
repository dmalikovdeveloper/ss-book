import { Component, Input } from '@angular/core';
import { UserModel } from '@models/api';
import { PageModel } from '@models/utils';
import { ROUTES_LIST } from '@constants';

@Component({
  selector: 'app-header-nav',
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.scss']
})
export class HeaderNavComponent {
  public readonly pages: PageModel[] = ROUTES_LIST;

  @Input() user: UserModel | null = null;
}
