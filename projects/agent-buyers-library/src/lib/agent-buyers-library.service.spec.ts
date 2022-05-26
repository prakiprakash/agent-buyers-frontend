import { TestBed } from '@angular/core/testing';

import { AgentBuyersLibraryService } from './agent-buyers-library.service';

describe('AgentBuyersLibraryService', () => {
  let service: AgentBuyersLibraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AgentBuyersLibraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
