import { Component, Input, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { tap } from 'rxjs';
import { apiCallService } from 'src/app/service/api.service';
import { DetailState } from 'src/app/store/reducers/products.reducer';
import { detailedGameDataSelector } from 'src/app/store/selectors/products.selector';

@Component({
  selector: 'app-products-detail',
  templateUrl: './products-detail.component.html',
  styleUrls: ['./products-detail.component.scss']
})
export class ProductsDetailComponent implements OnInit {
  public data: any = { title: '' };
  public minReqKeys: any;


  constructor(private apiService: apiCallService, private store: Store<DetailState>) { }

  ngOnInit(): void {

    console.log('going to store');

    this.store.select(detailedGameDataSelector)
      .subscribe((data) => {
        console.log(data.game, "gameData");
        this.data = data
      })
  }


}
