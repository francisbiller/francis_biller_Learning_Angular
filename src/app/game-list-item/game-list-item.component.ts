import {Component, Input, OnInit} from '@angular/core';
import {Games} from "../Games";

import { User } from '../Shared/Models/User';
import {MatCardModule} from "@angular/material/card";


@Component({
  selector: 'app-game-list-item',
  standalone: true,
  imports: [
    MatCardModule
  ],
  templateUrl: './game-list-item.component.html',
  styleUrl: './game-list-item.component.css'
})
export class GameListItemComponent implements OnInit {
  @Input() games!: Games;

  constructor(){}

  ngOnInit(): void {
    console.log('Game item', this.games);
  }
}

