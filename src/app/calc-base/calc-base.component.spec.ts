import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcBaseComponent } from './calc-base.component';

describe('CalcBaseComponent', () => {
  let component: CalcBaseComponent;
  let fixture: ComponentFixture<CalcBaseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CalcBaseComponent]
    });
    fixture = TestBed.createComponent(CalcBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
