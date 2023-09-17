import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutsCardComponent } from './produts-card.component';

describe('ProdutsCardComponent', () => {
  let component: ProdutsCardComponent;
  let fixture: ComponentFixture<ProdutsCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProdutsCardComponent]
    });
    fixture = TestBed.createComponent(ProdutsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
