import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyGameItemComponent } from './modify-game-item.component';

describe('ModifyGameItemComponent', () => {
  let component: ModifyGameItemComponent;
  let fixture: ComponentFixture<ModifyGameItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModifyGameItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifyGameItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
