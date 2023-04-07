import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentaireBouteilleComponent } from './commentaire-bouteille.component';

describe('CommentaireBouteilleComponent', () => {
  let component: CommentaireBouteilleComponent;
  let fixture: ComponentFixture<CommentaireBouteilleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommentaireBouteilleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommentaireBouteilleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
