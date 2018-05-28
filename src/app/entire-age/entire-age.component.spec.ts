import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntireAgeComponent } from './entire-age.component';

describe('EntireAgeChartComponent', () => {
  let component: EntireAgeComponent;
  let fixture: ComponentFixture<EntireAgeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntireAgeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntireAgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
