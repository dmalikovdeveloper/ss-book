import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookViewUiComponent } from './book-view-ui.component';

describe('BookViewUiComponent', () => {
  let component: BookViewUiComponent;
  let fixture: ComponentFixture<BookViewUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookViewUiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookViewUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
