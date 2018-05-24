import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KingdomChartComponent } from './kingdom-chart.component';

describe('KingdomChartComponent', () => {
  let component: KingdomChartComponent;
  let fixture: ComponentFixture<KingdomChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KingdomChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KingdomChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
