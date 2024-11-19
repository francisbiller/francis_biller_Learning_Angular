import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'games', pathMatch: 'full' },
  {
    path: 'games',
    loadComponent: () =>
      import('./app/game-list/game-list.component').then(m => m.GameListComponent)
  },
  {
    path: 'games/:id',
    loadComponent: () =>
      import('./app/game-list-item/game-list-item.component').then(m => m.GameListItemComponent)
  },
  {
    path: 'modify-game',
    loadComponent: () =>
      import('./app/modify-game-item/modify-game-item.component').then(m => m.ModifyGameItemComponent)
  },
  {
    path: '**',
    loadComponent: () =>
      import('./app/page-not-found/page-not-found.component').then(m => m.PageNotFoundComponent)
  }
];

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)],
}).then(() => console.log('Application started successfully'));
