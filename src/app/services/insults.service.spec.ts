import { TestBed } from '@angular/core/testing';

import { InsultsService } from './insults.service';

describe('InsultsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InsultsService = TestBed.get(InsultsService);
    expect(service).toBeTruthy();
  });
});
