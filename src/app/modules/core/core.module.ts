import { NgModule, Optional, SkipSelf } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router'
import { HeaderComponent } from './shared/components/header/header.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { HeaderUserDropdownComponent } from './shared/components/header/header-user-dropdown/header-user-dropdown.component';
import { HeaderNavComponent } from './shared/components/header/header-nav/header-nav.component';

@NgModule({
  imports: [MatToolbarModule, MatIconModule, MatButtonModule, RouterModule, CommonModule, MatMenuModule],
  exports: [HeaderComponent, FooterComponent],
  declarations: [HeaderComponent, SidebarComponent, FooterComponent, HeaderUserDropdownComponent, HeaderNavComponent],
  providers: [],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only',
      );
    }
  }
}
