import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarSearchInputComponent } from './navbar-search-input.component';

describe('NavbarSearchInputComponent', () => {
  let component: NavbarSearchInputComponent;
  let fixture: ComponentFixture<NavbarSearchInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarSearchInputComponent]
    });
    fixture = TestBed.createComponent(NavbarSearchInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
