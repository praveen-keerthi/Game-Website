import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsDetailComponent } from './products-detail.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { provideMockStore } from '@ngrx/store/testing';

describe('ProductsDetailComponent', () => {
  let component: ProductsDetailComponent;
  let fixture: ComponentFixture<ProductsDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductsDetailComponent],
      imports: [HttpClientTestingModule],
      providers: [provideMockStore({})],
    });
    fixture = TestBed.createComponent(ProductsDetailComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
