import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeBouteillesComponent } from './liste-bouteilles.component';

describe('ListeBouteillesComponent', () => {
  let component: ListeBouteillesComponent;
  let fixture: ComponentFixture<ListeBouteillesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeBouteillesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeBouteillesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
