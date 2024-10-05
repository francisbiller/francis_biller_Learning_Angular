import { Component , Input } from '@angular/core';
import {Games} from "../Games";


@Component({
  selector: 'app-game-list-item',
  standalone: true,
  imports: [],
  templateUrl: './game-list-item.component.html',
  styleUrl: './game-list-item.component.css'
})
export class GameListItemComponent {
  @Input() games!:Games;
}
