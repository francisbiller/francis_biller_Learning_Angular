import {Component, OnInit} from '@angular/core';

import {GameListItemComponent} from "../game-list-item/game-list-item.component";
import {Games} from "../Games";
import {NgClass, NgForOf} from "@angular/common";
import {gameList} from "../data/games-content";
import {GameService} from "../service/game-service.service";


@Component({
  selector: 'app-game-list',
  standalone: true,
  imports: [
    GameListItemComponent,
    NgClass,
    NgForOf
  ],
  templateUrl: './game-list.component.html',
  styleUrl: './game-list.component.css'
})export class GameListComponent implements OnInit {
  gameList: Games[] = [];

  constructor(private gameService: GameService) { }

  ngOnInit(): void {
    this.gameService.getGames().subscribe({
      next: (data: Games[]) =>this.gameList = data,
      error:err => console.error("Error fetching Students", err),
      complete:() => console.log("Student data fetch complete!")// Set the game list from the service
    });
  }
}
