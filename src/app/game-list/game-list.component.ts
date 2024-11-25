import { Component, OnInit } from '@angular/core';
import { GameListItemComponent } from "../game-list-item/game-list-item.component";
import { Games } from "../Games";
import {DatePipe, NgClass, NgForOf, TitleCasePipe, UpperCasePipe} from "@angular/common";
import { GameService } from "../service/game-service.service";
import {Router, RouterLink} from '@angular/router';
import {GamenamesPipe} from "../pipes/gamenames.pipe";
import {HoverHighlightDirective} from "../directives/hover-highlight.directive";

@Component({
  selector: 'app-game-list',
  standalone: true,
  imports: [
    GameListItemComponent,
    NgClass,
    NgForOf,
    GamenamesPipe,
    TitleCasePipe,
    UpperCasePipe,
    DatePipe,
    RouterLink,
    HoverHighlightDirective
  ],
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {
  gameList: Games[] = [];

  constructor(
    private gameService: GameService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.gameService.getGames().subscribe({
      next: (data: Games[]) => this.gameList = data,
      error: (err) => console.error("Error fetching games", err),
      complete: () => console.log("Game data fetch complete!")
    });
  }

  delete(id: number): void {
    this.gameList = this.gameList.filter(game => game.id !== id);
  }

  edit(): void {
    this.router.navigate(['modify-list-item']);
  }
}
