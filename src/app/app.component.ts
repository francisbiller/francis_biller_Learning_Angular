import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgForOf, NgIf } from '@angular/common';
import { GameListItemComponent } from './game-list-item/game-list-item.component';
import { GameListComponent } from './game-list/game-list.component';
import { Games } from './Games';
import { GameService } from './service/game-service.service'; // Import the service

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgForOf, NgIf, GameListItemComponent, GameListComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  singleGame!: Games;

  constructor(private gameService: GameService) {
  } // Inject the service

  ngOnInit(): void {
    const gameId = 1;


    this.gameService.getGameById(gameId).subscribe(game => {
      this.singleGame = game!;
      console.log('Fetched game:', this.singleGame);
    });
  }
}
