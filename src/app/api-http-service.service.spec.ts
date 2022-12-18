import { TestBed } from '@angular/core/testing';

import { ApiHttpServiceService } from './api-http-service.service';

describe('ApiHttpServiceService', () => {
  let service: ApiHttpServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiHttpServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
