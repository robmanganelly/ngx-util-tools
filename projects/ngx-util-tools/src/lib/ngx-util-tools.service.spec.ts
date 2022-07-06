import { TestBed } from '@angular/core/testing';

import { NgxUtilToolsService } from './ngx-util-tools.service';

describe('NgxUtilToolsService', () => {
  let service: NgxUtilToolsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxUtilToolsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
