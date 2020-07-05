import { TestBed } from '@angular/core/testing';

import { ApiDocumentoService } from './api-documento.service';

describe('ApiDocumentoService', () => {
  let service: ApiDocumentoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiDocumentoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
