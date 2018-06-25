import { TestBed, inject } from '@angular/core/testing';

import { CreateChartService } from './create-chart.service';

describe('CreateChartService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CreateChartService]
    });
  });

  it('should be created', inject([CreateChartService], (service: CreateChartService) => {
    expect(service).toBeTruthy();
  }));
});
