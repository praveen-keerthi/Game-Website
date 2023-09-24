import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsComboComponent } from './products-combo.component';
import { apiCallService } from 'src/app/service/api.service';
import { Store, StoreModule } from '@ngrx/store';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ProductFilterComponent } from '../product-filter/product-filter.component';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { ProductState, productReducer } from 'src/app/store/reducers/products.reducer';
import { ProductAction } from 'src/app/store/actions/products.action';
import { NgxPaginationModule } from 'ngx-pagination';
import { of } from 'rxjs';


describe('ProductsComboComponent', () => {
  let component: ProductsComboComponent;
  let apiService: jasmine.SpyObj<apiCallService>;
  let store: jasmine.SpyObj<Store>;

  beforeEach(() => {

    apiService = jasmine.createSpyObj('ApiService', ['getData']);
    store = jasmine.createSpyObj('Store', ['dispatch', 'select']);

    TestBed.configureTestingModule({
      declarations: [ProductsComboComponent, ProductFilterComponent],
      providers: [
        { provide: apiCallService, useValue: apiService },
        { provide: Store, useValue: store },
      ],
      imports: [NgxPaginationModule]
    });

    component = TestBed.createComponent(ProductsComboComponent).componentInstance;
  });

  it('should fetch and dispatch data on ngOnInit', () => {
    const data = { data: '' };

    apiService.getData.and.returnValue(of(data));

    store.select.and.returnValue(of(data));

    component.ngOnInit();

    expect(apiService.getData).toHaveBeenCalled();

    expect(store.dispatch).toHaveBeenCalledWith(
      ProductAction.getData({ data })
    );

  });
});
