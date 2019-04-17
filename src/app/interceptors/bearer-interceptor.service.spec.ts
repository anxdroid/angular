import { TestBed } from '@angular/core/testing';

import { BearerInterceptorService } from './bearer-interceptor.service';

describe('BearerInterceptorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BearerInterceptorService = TestBed.get(BearerInterceptorService);
    expect(service).toBeTruthy();
  });
});
