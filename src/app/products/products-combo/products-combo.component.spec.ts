import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsComboComponent } from './products-combo.component';

describe('ProductsComboComponent', () => {
  let component: ProductsComboComponent;
  let fixture: ComponentFixture<ProductsComboComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductsComboComponent]
    });
    fixture = TestBed.createComponent(ProductsComboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
