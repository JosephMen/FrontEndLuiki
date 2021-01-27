import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaceMakerComponent } from './race-maker.component';

describe('RaceMakerComponent', () => {
  let component: RaceMakerComponent;
  let fixture: ComponentFixture<RaceMakerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RaceMakerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RaceMakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
