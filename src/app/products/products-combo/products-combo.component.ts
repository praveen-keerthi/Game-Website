import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { apiCallService } from 'src/app/api.service';

@Component({
  selector: 'app-products-combo',
  templateUrl: './products-combo.component.html',
  styleUrls: ['./products-combo.component.scss']
})
export class ProductsComboComponent implements OnInit {


  public data?: any;

  constructor(private apiService: apiCallService) {
    this.apiService.getData();
  }

  ngOnInit() {
    this.apiService.data$.subscribe(data => {
      this.data = data.slice(0, 12);
    });

    this.apiService.gameByTag$.subscribe(data => {
      this.data = data;
    })
  }

  changeDataFromFilter(dataFromFilter: any) {
    this.data = dataFromFilter.splice(0, Math.min(12, dataFromFilter.length));
  }
}
