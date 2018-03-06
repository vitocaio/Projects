import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { GamesService } from './../../services/game-services/games.service';
import { GameStore } from './../../game-store/game-store';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
  providers: [GamesService]
})
export class DetailsComponent implements OnInit {
  
  public game; // Objeto que contem as informacoes do game

  constructor(
    private route: ActivatedRoute, 
    private gameService: GamesService,
    private location: Location ) {}

  ngOnInit() {
    this.getGame();
  }

  /*
    metodo que recupera o game pelo ID
  */
  getGame(): void {
    const slug = this.route.snapshot.paramMap.get('slug');
    this.gameService.getGameById(slug)
      .subscribe(game => {
        this.game = game;
      });
  }

  back() {
    window.history.back();
  }
}
