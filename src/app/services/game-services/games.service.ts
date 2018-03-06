import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from "@angular/http";
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import "rxjs/Rx";

import { Game } from './../../models/game.model';
import { GameStore } from './../../game-store/game-store';

@Injectable()
export class GamesService {

    private limit = 100;
    private offset = 0;

    /*
      URLs dos servicos da API do Twitch
    */
    private TwitchTopURL = "https://api.twitch.tv/kraken/games/top";
    private TwitchSearchURL = "https://api.twitch.tv/kraken/search/games?query=";
    private FakeURL = "http://localhost:8181/top";

    constructor(private http: Http, private gameStore: GameStore) {
      const userAgent = navigator.userAgent;

      if (userAgent.match(/Android|BlackBerry|iPhone|iPod|Opera Mini|IEMobile/i)) {
        this.limit = 25;
      } else if (userAgent.match(/iPad/i)) {
        this.limit = 50;
      } else {
        this.limit = 100;
      }
    }

    /*
      Recupera todos os top games da API
    */
    getAllGames() {
      return this.request(this.TwitchTopURL)
    }

    /*
      Retorna um jogo do repositorio pelo ID
    */
    getGameById(slug): Observable<Game>  {
      let game;
      this.gameStore.games.forEach((elem, index) => {
          if(elem._id == slug){
            game = elem;
          }
      });
      return of(game);
    }

    /*
      Faz a busca na api da Twitch
    */
    getGameByName(game: string) {
      return this.request(this.TwitchSearchURL + game)
    }

    private handleError(error: Response) {
        return Observable.throw(error.statusText);
    }

    /*
      Executa as request passando CLint-ID(parametro obrigatorio para acessar a api)
    */
    private request(endPoint): Observable<any[]> {
      const headerDict = {
          'Accept': 'application/vnd.twitchtv.v5+json',
          'Client-ID': '4l34ucee96ua3c5xa5a4zz6jnrnxl0'
      }

      const requestOptions = {                                                                                                                                                                                 
          headers: new Headers(headerDict), 
          params: {
            'limit' : this.limit,
            'offset': this.offset
          }
      };

      return this.http
      .get(endPoint, requestOptions)
      .map((response: Response) => {
          return <any[]>response.json();
      })
      .catch(this.handleError); 
    }
}
