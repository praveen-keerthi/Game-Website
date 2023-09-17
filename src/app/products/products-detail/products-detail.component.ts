import { Component, Input, OnInit } from '@angular/core';
import { apiCallService } from 'src/app/api.service';

@Component({
  selector: 'app-products-detail',
  templateUrl: './products-detail.component.html',
  styleUrls: ['./products-detail.component.scss']
})
export class ProductsDetailComponent implements OnInit {
  public data: any;
  public minReqKeys: any;

  constructor(private apiService: apiCallService) { }

  ngOnInit(): void {
    this.apiService.aGame$.subscribe(data => {
      this.data = data;
    })
    this.minReqKeys = Object.keys(this.data.minimum_system_requirements);
  }

}
