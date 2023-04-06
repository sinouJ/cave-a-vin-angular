import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfosCaveComponent } from './infos-cave.component';

describe('InfosCaveComponent', () => {
  let component: InfosCaveComponent;
  let fixture: ComponentFixture<InfosCaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfosCaveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfosCaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
