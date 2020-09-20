import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LineChartFourComponent } from './line-chart-four.component';

describe('LineChartFourComponent', () => {
  let component: LineChartFourComponent;
  let fixture: ComponentFixture<LineChartFourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LineChartFourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LineChartFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
