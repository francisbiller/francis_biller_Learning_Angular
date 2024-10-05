import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameListItemComponent } from './game-list-item.component';

describe('GameListItemComponent', () => {
  let component: GameListItemComponent;
  let fixture: ComponentFixture<GameListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GameListItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
