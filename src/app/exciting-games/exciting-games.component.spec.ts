import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcitingGamesComponent } from './exciting-games.component';

describe('ExcitingGamesComponent', () => {
  let component: ExcitingGamesComponent;
  let fixture: ComponentFixture<ExcitingGamesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExcitingGamesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExcitingGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
