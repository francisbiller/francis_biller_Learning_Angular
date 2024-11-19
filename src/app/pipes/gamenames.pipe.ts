import { Pipe, PipeTransform } from '@angular/core';

import {DatePipe, LowerCasePipe, UpperCasePipe} from "@angular/common";
import {gameList} from "../data/games-content";
import {Games} from "../Games";

@Pipe({
  name: 'gamenames',
  standalone: true
})
export class GamenamesPipe implements PipeTransform {

  transform(games: Games): string {
    return `${games.title} ${games.yearReleased}`
  }

}
