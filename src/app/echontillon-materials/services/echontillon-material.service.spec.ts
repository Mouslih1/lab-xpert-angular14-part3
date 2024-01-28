import { TestBed } from '@angular/core/testing';

import { EchontillonMaterialService } from './echontillon-material.service';

describe('EchontillonMaterialService', () => {
  let service: EchontillonMaterialService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EchontillonMaterialService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
