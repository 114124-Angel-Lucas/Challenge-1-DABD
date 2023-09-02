import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcButtonsComponent } from './calc-buttons.component';

describe('CalcButtonsComponent', () => {
  let component: CalcButtonsComponent;
  let fixture: ComponentFixture<CalcButtonsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CalcButtonsComponent]
    });
    fixture = TestBed.createComponent(CalcButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
