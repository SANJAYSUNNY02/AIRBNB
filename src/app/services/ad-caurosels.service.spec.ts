import { TestBed } from '@angular/core/testing';

import { AdCauroselsService } from './ad-caurosels.service';

describe('AdCauroselsService', () => {
  let service: AdCauroselsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdCauroselsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
