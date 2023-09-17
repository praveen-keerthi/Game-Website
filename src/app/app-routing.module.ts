import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProductsDetailComponent } from "./products/products-detail/products-detail.component";

@NgModule({
  imports: [RouterModule.forRoot([
    { path: '', pathMatch: 'full' },
    { path: 'detail', component: ProductsDetailComponent }
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }