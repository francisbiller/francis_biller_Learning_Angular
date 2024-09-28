import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { User } from './Shared/Models/User';
import {NgForOf, NgIf} from "@angular/common";
import {GameListItemComponent} from "./game-list-item/game-list-item.component";
import {GameListComponent} from "./game-list/game-list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgForOf, NgIf, GameListItemComponent, GameListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'

})
export class AppComponent {
  userList: User[] = //any[] would have worked as well
    [{id: 3, firstName: "John", lastName: "xotic", department:
          "Programming",age:24, isAdmin: false},
      {id: 10, firstName: "francis", lastName: "biller", department:
          "Programming",age:19, isAdmin:true},
      {id: 2, firstName: "yunhao", lastName: "chen", department:
          "Programming",age:18, isAdmin:true},
      {id: 5, firstName: "ruper", lastName: "rodrigo", department:
          "Programming",age:24, isAdmin:true},

    ]
}



