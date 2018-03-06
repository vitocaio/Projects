import { Component, OnInit } from '@angular/core';
import { GamesService } from './../../services/game-services/games.service';
import { Game } from './../../models/game.model';

import { GameStore } from './../../game-store/game-store';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css'],
  providers: [GamesService]
})
export class GamesComponent implements OnInit {

  public gamesList: Game[];
  public filter: string;
  public notfind: boolean = false;

  constructor(private gameService: GamesService, private gameStore: GameStore) { 
    this.getGames()
  }

  /*
    Recupera todos os games e armazena em um array de jogos para serem usados posteriormente
  */
  getGames(): void {
    if (this.gameStore.games.length > 0) {
      this.gamesList = this.gameStore.getGames();

      return;
    }
    this.gameService.getAllGames()
      .subscribe(
        games => {
          this.gameStore.addGames(games); 
          this.gamesList = this.gameStore.getGames(); 
          if(this.gamesList.length == 0) {
            this.notfind = true;
          } else {
            this.notfind = false
          }
        }
      );
  }

  /*
    Faz a busca de jogos na API
  */
  getGameByName(gameName: string) {
    if(gameName.length <= 1){
      this.getGames();
    } else {
      this.gameService.getGameByName(gameName)
      .debounceTime(400)
      .subscribe(
        data => {
          if(data['games'] == null) {
            this.notfind = true;
          } else {
            this.notfind = false;
            this.gamesList = data['games'];
          }
        }
      )
    }
  }

  /*
    Filtra a lista de jogos de acordo com o parametro enviado
  */
  getGamesBySort(sort) {
    this.filter = sort;
  }

  ngOnInit(): void {

  }
}
