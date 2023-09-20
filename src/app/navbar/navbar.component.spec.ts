import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarComponent } from './navbar.component';
import { NavbarSearchInputComponent } from './navbar-search-input/navbar-search-input.component';
import { apiCallService } from '../service/api.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NavbarUserComponent } from './navbar-user/navbar-user.component';
import { NgForm } from '@angular/forms';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarComponent, NavbarSearchInputComponent, NavbarUserComponent, NgForm],
      imports: [HttpClientTestingModule],
      providers: [apiCallService]
    });
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
