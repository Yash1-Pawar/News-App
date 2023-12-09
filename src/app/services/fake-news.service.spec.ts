import { TestBed } from '@angular/core/testing';

import { FakeNewsService } from './fake-news.service';

describe('FakeNewsService', () => {
  let service: FakeNewsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FakeNewsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
