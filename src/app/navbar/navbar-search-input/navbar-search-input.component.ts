import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { apiCallService } from 'src/app/api.service';

@Component({
  selector: 'app-navbar-search-input',
  templateUrl: './navbar-search-input.component.html',
  styleUrls: ['./navbar-search-input.component.scss']
})
export class NavbarSearchInputComponent {

  @ViewChild('form')
  public searchVal!: NgForm;
  // @Output() public aGameEmitter = new EventEmitter();

  public searchRecommondation: any = { 'platform': '', 'genre': [] };
  public debounceTimer: any = 0;

  constructor(private apiService: apiCallService) { }

  typingVal() {

    if (this.debounceTimer !== 0) {
      clearTimeout(this.debounceTimer);
    }
    const newTimeOut = setTimeout(() => {
      this.performSearch(this.searchVal.value.searchVal.toLowerCase());
    }, 1000);
    this.debounceTimer = newTimeOut;
  }

  returngame() {
    this.apiService.aGame$.subscribe(data => {
      // this.aGameEmitter.emit(data);
    })
  }


  performSearch(val: string) {
    this.searchRecommondation = { 'platform': '', 'genre': [] };
    if (val) {
      for (let i = 0; i < 2; i++) {
        if (this.apiService.uniquePlatforms[i].toLowerCase().includes(val)) {
          this.searchRecommondation['platform'] = this.apiService.uniquePlatforms[i];
        }
      }

      for (let i = 0; i < 16; i++) {
        if (this.apiService.unqiueGenre[i].toLowerCase().includes(val) && !this.searchRecommondation['genre'].includes(this.apiService.unqiueGenre[i])) {
          this.searchRecommondation['genre'].push(this.apiService.unqiueGenre[i]);
        }
      }
    }

  }


}
