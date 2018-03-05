import { Game } from './../models/game.model';

export class GameStore {
  games: Game[] = [];
  totalGames = 0;

  addGames(games: any): void {
    const collection = [];

    // Faz o parse do objeto do Twitch
    games.top.forEach((game) => {
      let parsedGame;

      parsedGame = game.game;
      parsedGame.channels = game.channels;
      parsedGame.viewers = game.viewers;
      parsedGame.id = parsedGame.name.toLowerCase()
        .replace(/\'\"\//g, '')
        .replace(/\s/g, '-')
        .replace('&', 'and');

      collection.push(parsedGame);
    });

    this.games = this.games.concat(collection);
    this.totalGames = games._total;
  }

  /*
  * Retorna a coleção de jogos
  *
  * @return Game[]
  */
  getGames(): Game[] {
    return this.games;
  }
}
