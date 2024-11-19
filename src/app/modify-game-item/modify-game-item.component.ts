import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Games } from '../Games';

import { ActivatedRoute, Router } from '@angular/router';
import {GameService} from "../service/game-service.service";

@Component({
  selector: 'app-modify-game-item',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './modify-game-item.component.html',
  styleUrls: ['./modify-game-item.component.css']
})
export class ModifyGameItemComponent implements OnInit {
  gameForm: FormGroup;
  currentGame: Games | undefined;

  constructor(
    private fb: FormBuilder,
    private gameService: GameService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.gameForm = this.fb.group({
      id: ['', Validators.required],
      title: ['', Validators.required],
      genre: ['', Validators.required],
      yearReleased: ['', [Validators.required, Validators.min(1900), Validators.max(new Date().getFullYear())]],
      productionCompany: ['', Validators.required],
      imageUrl: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.gameService.getGameById(+id).subscribe((game) => {
        if (game) {
          this.currentGame = game;
          this.gameForm.patchValue(game);
        }
      });
    }
  }

  onSubmit(): void {
    const game: Games = this.gameForm.value;
    if (game.id) {
      this.gameService.updateGame(game).subscribe(() => {
        this.router.navigate(['/game-list']);
      });
    } else {
      const newId = this.gameService.generateNewId();
      game.id = newId;
      this.gameService.addGame(game).subscribe(() => {
        this.router.navigate(['/game-list']);
      });
    }
  }

  navigateToGameList(): void {
    this.router.navigate(['/game-list']);
  }
}
