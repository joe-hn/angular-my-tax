import { TestBed } from '@angular/core/testing';

import { ApiCompraService } from './api-compra.service';

describe('ApiCompraService', () => {
  let service: ApiCompraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiCompraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
