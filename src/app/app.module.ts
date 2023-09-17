import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { navbarModule } from './navbar/navbar.module';
import { produtsModule } from './products/products.module';
import { apiCallService } from './api.service';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    navbarModule,
    produtsModule,
    HttpClientModule,
  ],
  providers: [apiCallService],
  bootstrap: [AppComponent]
})
export class AppModule { }
