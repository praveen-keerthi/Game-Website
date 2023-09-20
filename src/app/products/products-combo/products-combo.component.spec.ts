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

// describe('ProductsComboComponent', () => {
//   let component: ProductsComboComponent;
//   let fixture: ComponentFixture<ProductsComboComponent>;
//   let service: jasmine.SpyObj<apiCallService>;
//   let store: jasmine.SpyObj<Store>;

//   beforeEach(() => {
//     service = jasmine.createSpyObj('apiCallService', ['getData', 'pipe', 'select']);
//     store = jasmine.createSpyObj('Store', ['dispatch']);

//     TestBed.configureTestingModule({
//       declarations: [ProductsComboComponent, ProductFilterComponent],
//       imports: [HttpClientTestingModule, NgxPaginationModule],
//       providers: [{ provide: apiCallService, useValue: service }, { provide: Store, useValue: store }],
//     });
//     fixture = TestBed.createComponent(ProductsComboComponent);
//     component = fixture.componentInstance;

//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });

//   it('should load data of all games', () => {

//     const data = { data: '' };

//     service.getData.and.returnValue(of(data));

//     expect(store.dispatch).toHaveBeenCalledWith(ProductAction.getData({ data }))

//   })
// });

// describe('ProductsComboComponent', () => {
//   let component: ProductsComboComponent; // Replace with your actual component name
//   let apiService: jasmine.SpyObj<apiCallService>;
//   let store: jasmine.SpyObj<Store>;
//   // let selectProductSelector: jasmine.Spy;

//   beforeEach(() => {
//     // Create spy objects for ApiService and Store
//     apiService = jasmine.createSpyObj('ApiService', ['getData']);
//     store = jasmine.createSpyObj('Store', ['dispatch', 'pipe']);

//     TestBed.configureTestingModule({
//       declarations: [ProductsComboComponent, ProductFilterComponent], // Add your component to the declarations array
//       providers: [
//         { provide: apiCallService, useValue: apiService },
//         { provide: Store, useValue: store },
//       ],
//       imports: [NgxPaginationModule]
//     });

//     component = TestBed.createComponent(ProductsComboComponent).componentInstance;

//     // Mock the select method for your store selector
//     // selectProductSelector = jasmine.createSpy('selectProductSelector');
//     // store.select.and.callFake((selector: jasmine.Spy<jasmine.Func>) => {
//     //   if (selector === selectProductSelector) {
//     //     return of(Object({})); // Mock your selector's return value
//     //   }
//     //   return of(null); // Provide a default value for other selectors
//     // });
//   });

//   it('should fetch and dispatch data on ngOnInit', () => {
//     const mockApiResponse = { data: 'exampleData' };
//     spyOn(component['store'], 'select').and.returnValue({
//       subscribe: (callback: Function) => callback(mockApiResponse),
//     } as any);

//     // Mock the behavior of ApiService's getData method
//     apiService.getData.and.returnValue(of(mockApiResponse));

//     // Call the ngOnInit method
//     component.ngOnInit();

//     // Expect that ApiService's getData method was called
//     expect(apiService.getData).toHaveBeenCalled();

//     // Expect that Store's dispatch method was called with the expected action
//     expect(store.dispatch).toHaveBeenCalledWith(
//       ProductAction.getData({ data: mockApiResponse })
//     );

//     // You can add additional assertions if needed
//   });
// });



describe('YourComponent', () => {
  let component: ProductsComboComponent; // Replace with your actual component name
  let apiService: jasmine.SpyObj<apiCallService>;
  let store: jasmine.SpyObj<Store>;

  beforeEach(() => {
    // Create spy objects for ApiService and Store
    apiService = jasmine.createSpyObj('ApiService', ['getData']);
    store = jasmine.createSpyObj('Store', ['dispatch', 'select']);

    TestBed.configureTestingModule({
      declarations: [ProductsComboComponent, ProductFilterComponent], // Add your component to the declarations array
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
