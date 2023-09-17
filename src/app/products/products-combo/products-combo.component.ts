import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { apiCallService } from 'src/app/api.service';

@Component({
  selector: 'app-products-combo',
  templateUrl: './products-combo.component.html',
  styleUrls: ['./products-combo.component.scss']
})
export class ProductsComboComponent implements OnInit {

  // @Output() detailedGameData: EventEmitter<any> = new EventEmitter<any>();

  public data?: any;

  constructor(private apiService: apiCallService) {
    this.apiService.getData();
  }

  ngOnInit() {
    this.apiService.data$.subscribe(data => {
      this.data = data.slice(0, 12);
    }
    );
  }

  changeDataFromFilter(dataFromFilter: any) {
    this.data = dataFromFilter.splice(0, Math.min(12, dataFromFilter.length));
  }
}
