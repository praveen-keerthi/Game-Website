import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsDetailComponent } from './products-detail.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { StoreModule } from '@ngrx/store';
import { apiCallService } from 'src/app/service/api.service';
import { provideMockStore } from '@ngrx/store/testing';

describe('ProductsDetailComponent', () => {
  let component: ProductsDetailComponent;
  let fixture: ComponentFixture<ProductsDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductsDetailComponent],
      imports: [HttpClientTestingModule],
      providers: [provideMockStore({})],
    });
    fixture = TestBed.createComponent(ProductsDetailComponent);
    component = fixture.componentInstance;
    // component.data = {
    //   id: 540,
    //   title: 'Overwatch 2',
    //   thumbnail: 'https://www.freetogame.com/g/540/thumbnail.jpg',
    //   status: 'Live',
    //   short_description: 'A hero-focused first-person team shooter from Blizzard Entertainment.',
    //   description: 'The tale of the hero organization Overwatch continues in Overwatch 2. This new take on the popular team shooter changes up things a little with five-man teams, redefined classes, and new playable characters. With the adjustment to 5v5, players now have more individual impact than in the previous game.\r\n\r\nChallenge yourself in all-new modes. Take control of a robot with your team in Push and take it to the enemy base before the enemy can take it from you. Explore all new areas, including iconic real-world cities such as New York, Rome, Monte Carlo, Toronto, and more.\r\n\r\nOverwatch 2 features an update schedule that drops new content every nine weeks. It also boasts a regular battle pass – both free and premium. This is where some of the game’s characters will be obtained.',
    //   game_url: 'https://www.freetogame.com/open/overwatch-2',
    //   genre: 'Shooter',
    //   platform: 'Windows',
    //   publisher: 'Activision Blizzard',
    //   developer: 'Blizzard Entertainment',
    //   release_date: '2022-10-04',
    //   freetogame_profile_url: 'https://www.freetogame.com/overwatch-2',
    //   minimum_system_requirements: {
    //     os: 'Windows 10 64-bit',
    //     processor: 'Intel Core i3 or AMD Phenom X3 8650',
    //     memory: '6 GB',
    //     graphics: 'NVIDIA GeForce GTX 600 series or AMD Radeon HD 7000 series',
    //     storage: '50 GB'
    //   },
    //   screenshots: [
    //     {
    //       id: 1334,
    //       image: 'https://www.freetogame.com/g/540/overwatch-2-1.jpg'
    //     },
    //     {
    //       id: 1335,
    //       image: 'https://www.freetogame.com/g/540/overwatch-2-2.jpg'
    //     },
    //     {
    //       id: 1336,
    //       image: 'https://www.freetogame.com/g/540/overwatch-2-3.jpg'
    //     }
    //   ]
    // }

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
