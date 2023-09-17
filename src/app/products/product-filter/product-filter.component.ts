import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { apiCallService } from 'src/app/api.service';

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

  constructor(private apiService: apiCallService) { }

  ngOnInit(): void {
  }

  selectGenre() {
    this.seletedTag.genre = this.genre.nativeElement.value;
    this.apiService.gamebyTag(this.seletedTag);
  }

  selectPlatform() {
    this.seletedTag.platform = this.platform.nativeElement.value;
    this.apiService.gamebyTag(this.seletedTag);
  }

  clearPlatform() {
    this.platform.nativeElement.value = "";
    this.seletedTag.platform = "";
    this.apiService.gamebyTag(this.seletedTag);
  }
  clearGenre() {
    this.genre.nativeElement.value = "";
    this.seletedTag.genre = "";
    this.apiService.gamebyTag(this.seletedTag);
  }
}
