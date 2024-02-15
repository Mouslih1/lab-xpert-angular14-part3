import { TestBed } from '@angular/core/testing';

import { EchontillonService } from './echontillon.service';

describe('EchontillonService', () => {
  let service: EchontillonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EchontillonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
