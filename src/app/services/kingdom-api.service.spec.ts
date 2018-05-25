import { TestBed, inject } from '@angular/core/testing';

import { KingdomApiService } from './kingdom-api.service';

describe('KingdomApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [KingdomApiService]
    });
  });

  it('should be created', inject([KingdomApiService], (service: KingdomApiService) => {
    expect(service).toBeTruthy();
  }));
});
