import { TestBed } from '@angular/core/testing';

import { AuthentificationInterceptorService } from './authentification.interceptor.service';

describe('AuthentificationInterceptorService', () => {
  let service: AuthentificationInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthentificationInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
