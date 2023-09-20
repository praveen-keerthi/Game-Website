import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class apiCallService {
  headers: HttpHeaders = new HttpHeaders({
    'X-RapidAPI-Key': '89073f727bmsh8bced0818c15608p1a64f1jsn7ca59d0df5e2',
    'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
  })


  constructor(private http: HttpClient) { }
  // private dataSubject = new BehaviorSubject<any>(null);
  // private aGameSubject = new BehaviorSubject<any>(null);
  // private gameByTagSubject = new BehaviorSubject<any>(null);

  // data$ = this.dataSubject.asObservable();
  // aGame$ = this.aGameSubject.asObservable();
  // gameByTag$ = this.gameByTagSubject.asObservable();

  public uniquePlatforms = ['PC', 'Web Browser'];
  public unqiueGenre = ['Shooter', 'MMOARPG', 'ARPG', 'Strategy', 'MMORPG', 'Fighting', 'Action RPG', 'Battle Royale', 'MOBA', 'Sports', 'Racing', 'Card Game', 'MMO', 'Social', ' MMORPG', 'Fantasy']

  options: any;


  public gameData?: any;
  public particularGame?: any;

  getData() {
    // this.http.get("https://free-to-play-games-database.p.rapidapi.com/api/games", { headers: this.headers }).subscribe((data) => {
    //   this.dataSubject.next(Object.values(data));
    // })
    return this.http.get("https://free-to-play-games-database.p.rapidapi.com/api/games", { headers: this.headers });
  }

  aGameData(gameId: string) {
    this.options = {
      method: 'GET',
      params: { id: gameId },
      headers: {
        'X-RapidAPI-Key': '89073f727bmsh8bced0818c15608p1a64f1jsn7ca59d0df5e2',
        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
      }
    };
    // console.log("inside aGame data fn");

    // console.log(this.http.get('https://free-to-play-games-database.p.rapidapi.com/api/game', this.options));

    return this.http.get('https://free-to-play-games-database.p.rapidapi.com/api/game', this.options);
  }

  gamebyTag(tag: any) {
    if (tag.genre && tag.platform) {
      return this.gameByMultipletag(tag);
    } else if (tag.genre) {
      return this.gamebyGenre(tag.genre);
    } else if (tag.platform) {
      return this.gameByPlatform(tag.platform);
    } else {
      return this.getData();
    }

  }

  gameByMultipletag(tag: any) {
    this.options = {
      method: 'GET',
      params: {
        platform: tag.platform,
        category: tag.genre,
      },
      headers: {
        'X-RapidAPI-Key': '89073f727bmsh8bced0818c15608p1a64f1jsn7ca59d0df5e2',
        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
      }
    };
    return this.http.get('https://free-to-play-games-database.p.rapidapi.com/api/games', this.options)

  }

  gamebyGenre(genre: string) {
    this.options = {
      method: 'GET',
      params: {
        category: genre,
      },
      headers: {
        'X-RapidAPI-Key': '89073f727bmsh8bced0818c15608p1a64f1jsn7ca59d0df5e2',
        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
      }
    };
    return this.http.get('https://free-to-play-games-database.p.rapidapi.com/api/games', this.options)

  }

  gameByPlatform(platform: string) {
    this.options = {
      method: 'GET',
      params: {
        platform: platform,
      },
      headers: {
        'X-RapidAPI-Key': '89073f727bmsh8bced0818c15608p1a64f1jsn7ca59d0df5e2',
        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
      }
    };

    return this.http.get('https://free-to-play-games-database.p.rapidapi.com/api/games', this.options);
  }

}
