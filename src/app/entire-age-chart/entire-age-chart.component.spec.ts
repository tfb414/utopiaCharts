import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntireAgeChartComponent } from './entire-age-chart.component';

describe('EntireAgeChartComponent', () => {
  let component: EntireAgeChartComponent;
  let fixture: ComponentFixture<EntireAgeChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntireAgeChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntireAgeChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
