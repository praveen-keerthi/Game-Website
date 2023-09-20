import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { navbarModule } from './navbar/navbar.module';
import { produtsModule } from './products/products.module';
import { ProductsComponent } from './products/products.component';
import { apiCallService } from './service/api.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterModule } from '@angular/router';

describe('AppComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    declarations: [AppComponent, ProductsComponent],
    imports: [navbarModule, HttpClientTestingModule, RouterModule],
    providers: [apiCallService]
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'gameWebsite'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('gameWebsite');
  });
});
