import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EasyRaceComponent } from './easy-race.component';

describe('EasyRaceComponent', () => {
  let component: EasyRaceComponent;
  let fixture: ComponentFixture<EasyRaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EasyRaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EasyRaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
