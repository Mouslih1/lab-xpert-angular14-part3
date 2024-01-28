import { TestBed } from '@angular/core/testing';

import { SousAnalyseService } from './sous-analyse.service';

describe('SousAnalyseService', () => {
  let service: SousAnalyseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SousAnalyseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
