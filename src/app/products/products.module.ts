import { NgModule } from "@angular/core";
import { ProductsComponent } from "./products.component";
import { ProdutsCardComponent } from "./produts-card/produts-card.component";
import { BrowserModule } from "@angular/platform-browser";
import { apiCallService } from "../service/api.service";
import { ProductsDetailComponent } from './products-detail/products-detail.component';
import { ProductFilterComponent } from './product-filter/product-filter.component';
import { ProductsComboComponent } from './products-combo/products-combo.component';
import { RouterModule, RouterOutlet } from "@angular/router";
import { ProductsRoutingModule } from "./products.routes";
import { gameDetailReducer, productReducer } from "../store/reducers/products.reducer";
import { StoreModule } from "@ngrx/store";
import { NgxPaginationModule } from "ngx-pagination";

@NgModule({
    declarations: [
        ProductsComponent,
        ProdutsCardComponent,
        ProductsDetailComponent,
        ProductFilterComponent,
        ProductsComboComponent,
    ],
    imports: [BrowserModule, ProductsRoutingModule, StoreModule.forFeature('products', productReducer), StoreModule.forFeature('game', gameDetailReducer), NgxPaginationModule],
    exports: [ProductsComponent],
    providers: []
})
export class produtsModule { }