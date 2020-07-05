import { TestBed } from '@angular/core/testing';

import { ApiContadorService } from './api-contador.service';

describe('ApiContadorService', () => {
  let service: ApiContadorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiContadorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
