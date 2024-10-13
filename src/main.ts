import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

import {provideRouter, Routes } from "@angular/router";
import {GameListComponent} from "./app/game-list/game-list.component";
import {GameListItemComponent} from "./app/game-list-item/game-list-item.component";
import {ModifyGameItemComponent} from "./app/modify-game-item/modify-game-item.component";
import {PageNotFoundComponent} from "./app/page-not-found/page-not-found.component";





 const routes: Routes = [
   {path: '',redirectTo: 'shared/games', pathMatch: 'full'},
{ path: 'shared/games', component: GameListComponent},
{ path: 'shared/games/:id', component: GameListItemComponent},
   {path: 'modify-game', component: ModifyGameItemComponent},
   {path: '**', component: PageNotFoundComponent}
];


bootstrapApplication(AppComponent, {
  providers:[provideRouter(routes)],
});
