import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { noop, tap } from 'rxjs';
import { apiCallService } from 'src/app/service/api.service';
import { ProductAction } from 'src/app/store/actions/products.action';
import { ProductState } from 'src/app/store/reducers/products.reducer';

@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.scss']
})
export class ProductFilterComponent implements OnInit {
  @ViewChild('genre')
  genre!: ElementRef;

  @ViewChild('platform')
  platform!: ElementRef;

  seletedTag: { 'genre': string, 'platform': string } = { 'genre': '', 'platform': '' }

  constructor(private apiService: apiCallService, private store: Store<ProductState>) { }

  ngOnInit(): void {
  }

  selectGenre() {
    this.seletedTag.genre = this.genre.nativeElement.value;
    this.gameByTagInFilter();
  }

  selectPlatform() {
    this.seletedTag.platform = this.platform.nativeElement.value;
    this.gameByTagInFilter();
  }

  clearPlatform() {
    this.platform.nativeElement.value = "";
    this.seletedTag.platform = "";
    this.gameByTagInFilter();
  }
  clearGenre() {
    this.genre.nativeElement.value = "";
    this.seletedTag.genre = "";
    this.gameByTagInFilter();
  }

  gameByTagInFilter() {
    this.apiService.gamebyTag(this.seletedTag)
      .pipe(tap(data => {
        this.store.dispatch(ProductAction.getDataByTag({ data }));
      }))
      .subscribe(() => {
        noop
      })
  }
}
