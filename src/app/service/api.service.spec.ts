import { HttpClient, HttpHeaders } from "@angular/common/http";
import { apiCallService } from "./api.service"
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { TestBed } from "@angular/core/testing";
import { Mockdata } from "src/Mocks/mock.gameData";
import { MockAGameData } from "src/Mocks/mock.aGameData";

describe("Api Service", () => {
  let service: apiCallService;
  let http: HttpClientTestingModule;
  let httpController: HttpTestingController;
  let headers: HttpHeaders;
  beforeEach(() => {
    headers = new HttpHeaders({
      'X-RapidAPI-Key': '89073f727bmsh8bced0818c15608p1a64f1jsn7ca59d0df5e2',
      'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
    })

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [apiCallService]
    })

    service = TestBed.inject(apiCallService);
    http = TestBed.inject(HttpClientTestingModule);
    httpController = TestBed.inject(HttpTestingController);
  })

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


  it('Get all games data', () => {
    const url = "https://free-to-play-games-database.p.rapidapi.com/api/games";
    service.getData().subscribe(data => {
      expect(data).toBeTruthy("No data is returned");
      expect(Object.values(data).length).toBe(2);
    })

    const req = httpController.expectOne(url);
    expect(req.request.method).toEqual("GET");

    req.flush(Mockdata);

  })

  it("Get a game data", () => {
    const url = 'https://free-to-play-games-database.p.rapidapi.com/api/game?id=540';
    const id = '540';
    service.aGameData(id).subscribe(data => {
      expect(data).toBeTruthy("No data is returned for a game");
    })
    const req = httpController.expectOne(url);
    expect(req.request.method).toEqual("GET");
    expect(req.request.params.get('id')).toEqual('540');

    req.flush(MockAGameData);
  })


  it("Get a game by multiple tag", () => {
    const url = 'https://free-to-play-games-database.p.rapidapi.com/api/games?platform=pc&category=shooting';
    service.gameByMultipletag({ 'platform': 'pc', 'genre': 'shooting' }).subscribe(data => {
      expect(data).toBeTruthy("No data is returned for a game");
    })
    const req = httpController.expectOne(url);
    expect(req.request.method).toEqual("GET");
    expect(req.request.params.get('platform')).toEqual('pc');
    expect(req.request.params.get('category')).toEqual('shooting');

    req.flush({});
  })

  it("Get a game by genre tag", () => {
    const url = 'https://free-to-play-games-database.p.rapidapi.com/api/games?category=shooting';
    service.gamebyGenre('shooting').subscribe(data => {
      expect(data).toBeTruthy("No data is returned for a game");
    })
    const req = httpController.expectOne(url);
    expect(req.request.method).toEqual("GET");
    expect(req.request.params.get('category')).toEqual('shooting');

    req.flush({});
  })

  it("Get a game by platform tag", () => {
    const url = 'https://free-to-play-games-database.p.rapidapi.com/api/games?platform=pc';
    service.gameByPlatform('pc').subscribe(data => {
      expect(data).toBeTruthy("No data is returned for a game");
    })
    const req = httpController.expectOne(url);
    expect(req.request.method).toEqual("GET");
    expect(req.request.params.get('platform')).toEqual('pc');

    req.flush({});
  })


  it("Determines the api call to make", () => {
    service.gamebyTag({ 'platform': 'pc', 'genre': 'shooting' }).subscribe(data => {
      expect(data).toBeTruthy("No data is returned for a game");
    })

    service.gamebyTag({ 'platform': 'pc', 'genre': undefined }).subscribe(data => {
      expect(data).toBeTruthy("No data is returned for a game");
    })

    service.gamebyTag({ 'platform': undefined, 'genre': 'shooting' }).subscribe(data => {
      expect(data).toBeTruthy("No data is returned for a game");
    })

    service.gamebyTag({ 'platform': undefined, 'genre': undefined }).subscribe(data => {
      expect(data).toBeTruthy("No data is returned for a game");
    })
  })



})