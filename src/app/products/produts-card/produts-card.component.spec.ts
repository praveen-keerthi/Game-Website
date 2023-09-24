import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutsCardComponent } from './produts-card.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
// import { StoreModule } from '@ngrx/store';
import { provideMockStore, MockStore } from '@ngrx/store/testing'
import { DetailState } from 'src/app/store/reducers/products.reducer';
import { ProductAction } from 'src/app/store/actions/products.action';
import { apiCallService } from 'src/app/service/api.service';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';


describe('ProdutsCardComponent', () => {
  let component: ProdutsCardComponent; 
  let apiService: jasmine.SpyObj<apiCallService>;
  let store: jasmine.SpyObj<Store>;
  let router: jasmine.SpyObj<Router>;

  beforeEach(() => {

    apiService = jasmine.createSpyObj('ApiService', ['aGameData']);
    store = jasmine.createSpyObj('Store', ['dispatch']);
    router = jasmine.createSpyObj('Router', ['navigate']);

    TestBed.configureTestingModule({
      providers: [
        ProdutsCardComponent, 
        { provide: apiCallService, useValue: apiService },
        { provide: Store, useValue: store },
        { provide: Router, useValue: router },
      ],
    });

    component = TestBed.inject(ProdutsCardComponent); 
  });

  it('should load data and navigate to /detail on new page', () => {
    const id = 'exampleId';
    const mockApiResponse = { data: 'exampleData' };


    apiService.aGameData.and.returnValue(of(Object(mockApiResponse)));

    component.loadOnNewPage(id);


    expect(apiService.aGameData).toHaveBeenCalledWith(id);

    expect(store.dispatch).toHaveBeenCalledWith(
      ProductAction.gameDetail({ data: mockApiResponse })
    );

    expect(router.navigate).toHaveBeenCalledWith(['/detail']);
  });
});
