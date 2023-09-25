import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductFilterComponent } from './product-filter.component';
import { apiCallService } from 'src/app/service/api.service';
import { Store, StoreModule } from '@ngrx/store';
import {
  HttpClientTestingModule,
} from '@angular/common/http/testing';
import { ProductAction } from 'src/app/store/actions/products.action';
import { of } from 'rxjs';

describe('ProductFilterComponent', () => {
  let component: ProductFilterComponent;
  let fixture: ComponentFixture<ProductFilterComponent>;
  let service: jasmine.SpyObj<apiCallService>;
  let store: jasmine.SpyObj<Store>;

  beforeEach(() => {
    service = jasmine.createSpyObj(apiCallService, ['gamebyTag']);
    store = jasmine.createSpyObj(Store, ['dispatch']);
    TestBed.configureTestingModule({
      declarations: [ProductFilterComponent],
      imports: [HttpClientTestingModule],
      providers: [{ provide: apiCallService, useValue: service },
      { provide: Store, useValue: store }]
    });
    fixture = TestBed.createComponent(ProductFilterComponent);

    component = fixture.componentInstance;
    fixture.detectChanges();

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch data by tag when gameByTagInFilter is called', () => {
    const selectedTag = { 'genre': '', 'platform': '' };

    const data = { data: '' };
    service.gamebyTag.and.returnValue(of(data));

    component.seletedTag = selectedTag;
    component.gameByTagInFilter();

    expect(service.gamebyTag).toHaveBeenCalledWith(selectedTag);

    expect(store.dispatch).toHaveBeenCalledWith(
      ProductAction.getDataByTag({ data })
    );
  });


  it('should select Genre', () => {
    const selectedTag = { 'genre': '', 'platform': '' };

    const data = { data: '' };
    service.gamebyTag.and.returnValue(of(data));

    component.seletedTag = selectedTag;

    component.selectGenre()

    expect(service.gamebyTag).toHaveBeenCalledWith(selectedTag);

    expect(store.dispatch).toHaveBeenCalledWith(
      ProductAction.getDataByTag({ data: data })
    );
    
  })
  it('should select platform', () => {
    const selectedTag = { 'genre': '', 'platform': '' };

    const data = { data: '' };
    service.gamebyTag.and.returnValue(of(data));

    component.seletedTag = selectedTag;

    component.selectPlatform();

    expect(service.gamebyTag).toHaveBeenCalledWith(selectedTag);

    expect(store.dispatch).toHaveBeenCalledWith(
      ProductAction.getDataByTag({ data: data })
    );
    
  })
  it('should clear platform', () => {
    const selectedTag = { 'genre': '', 'platform': '' };

    const data = { data: '' };
    service.gamebyTag.and.returnValue(of(data));

    component.seletedTag = selectedTag;

    component.clearPlatform();

    expect(service.gamebyTag).toHaveBeenCalledWith(selectedTag);

    expect(store.dispatch).toHaveBeenCalledWith(
      ProductAction.getDataByTag({ data: data })
    );
  })
  it('should clear genre', () => {
    const selectedTag = { 'genre': '', 'platform': '' };

    const data = { data: '' };
    service.gamebyTag.and.returnValue(of(data));

    component.seletedTag = selectedTag;

    component.clearGenre();

    expect(service.gamebyTag).toHaveBeenCalledWith(selectedTag);

    expect(store.dispatch).toHaveBeenCalledWith(
      ProductAction.getDataByTag({ data: data })
    );
  })

});


