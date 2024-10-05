import {Observable, of} from "rxjs";
import {User} from "../Shared/Models/User";
import {Games} from "../Games";
import {Injectable} from "@angular/core";
import {gameList} from "../data/games-content";

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private games: Games[] = gameList; // Local copy of the game list

  constructor() { }

  // Method to get all games
  getGames(): Observable<Games[]> {
    return of(this.games);
  }

  // Method to get a game by id
  getGameById(id: number): Observable<Games | undefined> {
    const game = this.games.find(item => item.id === id); // Assuming each game has an id
    return of(game);
  }

  // Method to add a new game
  addGame(newGame: Games): Observable<Games[]> {
    this.games.push(newGame); // Add the new game to the array
    return of(this.games); // Return the updated array
  }

  // Method to update an existing game
  updateGame(updatedGame: Games): Observable<Games[]> {
    const index = this.games.findIndex(item => item.id === updatedGame.id);
    if (index !== -1) {
      this.games[index] = updatedGame; // Update the existing game
    }
    return of(this.games); // Return the updated array
  }

  // Method to remove a game by id
  deleteGame(id: number): Observable<Games[]> {
    this.games = this.games.filter(user => user.id !== id);
    return of(this.games);
  }
}
