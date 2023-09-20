import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { noop, tap } from 'rxjs';
import { apiCallService } from 'src/app/service/api.service';
import { ProductAction } from 'src/app/store/actions/products.action';
import { DetailState } from 'src/app/store/reducers/products.reducer';

@Component({
  selector: 'app-produts-card',
  templateUrl: './produts-card.component.html',
  styleUrls: ['./produts-card.component.scss']
})
export class ProdutsCardComponent {
  @Input() gameData?: any;
  constructor(private apiService: apiCallService, private router: Router, private store: Store<DetailState>) { }


  loadOnNewPage(id: string) {
    console.log("more detail btn clokced");

    this.apiService.aGameData(id)
      .pipe(tap(data => {
        console.log("game data dispatched");
        this.store.dispatch(ProductAction.gameDetail({ data }));
      }))
      .subscribe((data) => {
        noop
      })
    this.router.navigate(['/detail']);

  }

}
