import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderUserDropdownComponent } from './header-user-dropdown.component';

describe('HeaderUserDropdownComponent', () => {
  let component: HeaderUserDropdownComponent;
  let fixture: ComponentFixture<HeaderUserDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderUserDropdownComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderUserDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
