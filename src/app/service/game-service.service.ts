import {Observable, of} from "rxjs";
import {User} from "../Shared/Models/User";
import {Games} from "../Games";
import {Injectable} from "@angular/core";
import {gameList} from "../data/games-content";

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private games: Games[] = gameList;

  constructor() { }


  getGames(): Observable<Games[]> {
    return of(this.games);
  }

  getGameById(id: number): Observable<Games | undefined> {
    const game = this.games.find(item => item.id === id);
    return of(game);
  }


  addGame(newGame: Games): Observable<Games[]> {
    this.games.push(newGame);
    return of(this.games);
  }


  updateGame(updatedGame: Games): Observable<Games[]> {
    const index = this.games.findIndex(item => item.id === updatedGame.id);
    if (index !== -1) {
      this.games[index] = updatedGame;
    }
    return of(this.games);
  }


  deleteGame(id: number): Observable<Games[]> {
    this.games = this.games.filter(user => user.id !== id);
    return of(this.games);
  }
}
