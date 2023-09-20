import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarSearchInputComponent } from './navbar-search-input.component';
import { apiCallService } from 'src/app/service/api.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NgForm } from '@angular/forms';

describe('NavbarSearchInputComponent', () => {
  let component: NavbarSearchInputComponent;
  let fixture: ComponentFixture<NavbarSearchInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarSearchInputComponent, NgForm],
      providers: [apiCallService],
      imports: [HttpClientTestingModule]
    });
    fixture = TestBed.createComponent(NavbarSearchInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
