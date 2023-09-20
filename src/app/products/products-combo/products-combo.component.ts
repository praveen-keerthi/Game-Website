import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { noop, tap } from 'rxjs';
import { apiCallService } from 'src/app/service/api.service';
import { ProductAction } from 'src/app/store/actions/products.action';
import { ProductState } from 'src/app/store/reducers/products.reducer';
import { selectProductSelector } from 'src/app/store/selectors/products.selector';

@Component({
  selector: 'app-products-combo',
  templateUrl: './products-combo.component.html',
  styleUrls: ['./products-combo.component.scss']
})
export class ProductsComboComponent implements OnInit {

  p: number = 1;
  public data?: any;

  constructor(private apiService: apiCallService, private store: Store<ProductState>) {
    console.log("constructor of combo");
  }

  ngOnInit() {
    this.apiService.getData()
      .pipe(tap(data => {
        this.store.dispatch(ProductAction.getData({ data }));
      }))
      .subscribe((data) => {
        noop //No operation
      });

    this.store.select(selectProductSelector).subscribe(data => {
      this.data = data;
    })

  }
}
