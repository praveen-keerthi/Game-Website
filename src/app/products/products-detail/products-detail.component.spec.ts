import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductsDetailComponent } from './products-detail.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';

describe('ProductsDetailComponent', () => {
  let component: ProductsDetailComponent;
  let fixture: ComponentFixture<ProductsDetailComponent>;
  let store:jasmine.SpyObj<Store>

  beforeEach(() => {
    store = jasmine.createSpyObj(Store, ['select']);

    TestBed.configureTestingModule({
      declarations: [ProductsDetailComponent],
      imports: [HttpClientTestingModule],
      providers: [{provide:Store,useValue:store}],
    });
    fixture = TestBed.createComponent(ProductsDetailComponent);
    component = fixture.componentInstance;
    const data = { data: '' };

    store.select.and.returnValue(of(data));

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("should get a detailed data of a game",()=>{
    component.ngOnInit();
    expect(component.data).toEqual({data:''});
  })
});
