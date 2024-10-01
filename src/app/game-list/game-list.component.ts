import { Component } from '@angular/core';

import {GameListItemComponent} from "../game-list-item/game-list-item.component";
import {Games} from "../Games";
import {NgClass, NgForOf} from "@angular/common";


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
})
export class GameListComponent {
}
