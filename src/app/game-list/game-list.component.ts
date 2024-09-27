import { Component } from '@angular/core';
import {User} from "../Shared/Models/User";

@Component({
  selector: 'app-game-list',
  standalone: true,
  imports: [],
  templateUrl: './game-list.component.html',
  styleUrl: './game-list.component.css'
})
export class GameListComponent {
  contentItems = [
    {
      title: 'Call Of duty Modern Warfare 3',
      genre: 'action',
      yearReleased: '2023',
      productionCompany: 'Infinity ward'
    },
    {
      title: 'Fortnite',
      genre: 'action',
      yearReleased: '2017',
      productionCompany: 'Epic games'
    },
    {
      title: 'Minecraft',
      genre: '3D sandbox',
      yearReleased: '2011',
      productionCompany: 'Mojang studios'
    },
    {
      title: 'roblox',
      genre: 'First Person Game',
      yearReleased: '2006',
      productionCompany: 'Roblox corporation'
    },
  ];
}
