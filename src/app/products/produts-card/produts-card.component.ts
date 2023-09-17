import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { apiCallService } from 'src/app/api.service';

@Component({
  selector: 'app-produts-card',
  templateUrl: './produts-card.component.html',
  styleUrls: ['./produts-card.component.scss']
})
export class ProdutsCardComponent {
  @Input() gameData?: any;
  // @Output() detailedGameData = new EventEmitter<any>();



  constructor(private apiSerivce: apiCallService, private router: Router) { }

  loadOnNewPage(id: string) {
    this.apiSerivce.aGameData(id);
    this.router.navigate(['/detail']);

  }

}
