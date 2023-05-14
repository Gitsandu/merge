import { TestBed } from '@angular/core/testing';

import { JournalEntry } from './JournalEntry.service';

describe('JournalEntry', () => {
  let service: JournalEntry;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JournalEntry);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
