import { RouterModule, Routes } from "@angular/router";
import { ProductsDetailComponent } from "./products-detail/products-detail.component";
import { NgModule } from "@angular/core";
import { ProductsComboComponent } from "./products-combo/products-combo.component";

const route: Routes = [
  { path: '', pathMatch: 'full', component: ProductsComboComponent },
  { path: 'detail', component: ProductsDetailComponent }
];



@NgModule({
  imports: [RouterModule.forRoot(route)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }